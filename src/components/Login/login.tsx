import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from './login.module.css';
import {connect} from "react-redux";
import {loginReducer} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {Button, TextField} from "@mui/material";

type LoginFormPropsType = {
    onSubmit: SubmitHandler<FormValues>
    captureURL: string

}
type LoginPropsType = {
    isAuth: boolean
    loginReducer: (email: string, password: string, rememberMe: string, captcha: string) => void
    authError: string | null
    captureURL: string
}

type FormValues = {
    email: string
    password: string
    rememberMe: string
    captcha: string
};
type MapStateToPropsType = {
    isAuth: boolean
    captureURL: string | null
    authError: any
}
type AllFormPropsType = FormValues & LoginPropsType & LoginFormPropsType

export const LoginForm: React.FC<LoginFormPropsType> = ({onSubmit, captureURL}) => {

    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const {onChange, ...rest} = register("loginError");
    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Form</h1>
                <div className={s.email}>
                    <TextField sx={{
                        fs: "10px",
                        width: "300px"
                    }}
                               {...register("email", {
                                   required: true,
                                   maxLength: 40
                               })} placeholder={" e-mail"}
                               id="outlined-basic" label="e-mail" variant="outlined" size="small"/>

                    {errors?.email?.type === "required" && <span>This field is required</span>}
                    {errors?.email?.type === "maxLength" && (
                        <span>This field cannot exceed 40 characters</span>
                    )}
                </div>
                <div>
                    <TextField sx={{
                        fs: "10px",
                        width: "300px"
                    }}
                               {...register("password", {required: true, maxLength: 30}
                               )} placeholder={" password"} type={"password"}
                               id="outlined-basic" label="Password" variant="outlined" size="small"/>
                    {errors?.password?.type === "required" && <span>This field is required</span>}
                    {errors?.password?.type === "maxLength" && (
                        <span>This field cannot exceed 30 characters</span>
                    )}
                </div>
                <div> {captureURL && <img alt={"Угадай надпись"} src={captureURL}/>}
                    {captureURL &&
                    <div><input {...register("captcha")}
                                placeholder={"введите символы сюда"}
                                type={"text"}/></div>}
                </div>
                <div className={s.checkboxAndButtonBlock}>
                    <div>
                        <input {...register("rememberMe")} type="checkbox"/>
                        Remember me
                    </div>

                    {/*<input type="submit" value="Login"/>*/}
                    <Button type="submit" variant="contained">Login</Button>
                </div>
            </form>


            <div className={s.testAccount}>
                <h1> Test account: </h1>
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </div>
        </div>
    )
}

// @ts-ignore
const login: any = ({isAuth, loginReducer, authError, captureURL}) => {


    const onSubmit: SubmitHandler<FormValues> = data =>
        loginReducer(data.email, data.password, data.rememberMe, data.captcha);

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={s.loginBlock}>
        <LoginForm onSubmit={onSubmit} captureURL={captureURL}/>
        <div className={s.error}>
            {authError}
        </div>


    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError,
    captureURL: state.auth.captureURL
})

type MapDispatchToPropsType = {
    loginReducer: (email: string, password: string,
                   rememberMe: boolean, captcha: string) => void
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>

export default connect<MapStateToPropsType, MapDispatchToPropsType, AllFormPropsType, AppStateType>
(mapStateToProps, {loginReducer})(login);
