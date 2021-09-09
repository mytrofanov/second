import React from 'react';
import {useForm} from "react-hook-form";
import s from './login.module.css';
import {connect} from "react-redux";
import {loginReducer} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


export const LoginForm = ({onSubmit, captureURL}) => {

    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const {onChange, ...rest} = register("loginError");
    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Form</h1>
                <div>
                    <input {...register("email", {
                        required: true,
                        maxLength: 40
                    })} placeholder={" e-mail"}/>
                    {errors?.email?.type === "required" && <span>This field is required</span>}
                    {errors?.email?.type === "maxLength" && (
                        <span>This field cannot exceed 40 characters</span>
                    )}
                </div>
                <div>
                    <input {...register("password", {required: true, maxLength: 30}
                    )} placeholder={" password"} type={"password"}
                    />
                    {errors?.password?.type === "required" && <span>This field is required</span>}
                    {errors?.password?.type === "maxLength" && (
                        <span>This field cannot exceed 30 characters</span>
                    )}
                </div>
                <div> {captureURL && <img alt={"Капча"} src={captureURL}/>}
                    {captureURL &&
                    <div><input {...register("captcha")}
                                placeholder={"введите символы сюда"}
                                type={"text"}/></div>}
                </div>

                <div>
                    <input {...register("rememberMe")} type="checkbox"/>
                    Remember me
                </div>

                <input type="submit" value="Login"/>

            </form>


            <div className={s.testAccount}>
                <h1> Test account: </h1>
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </div>
        </div>
    )
}

const login = ({isAuth, loginReducer, authError, captureURL}) => {
    const onSubmit = data => loginReducer(data.email, data.password, data.rememberMe, data.captcha);


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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, authError: state.auth.authError,
    captureURL: state.auth.captureURL
})


export default connect(mapStateToProps, {loginReducer})(login);
