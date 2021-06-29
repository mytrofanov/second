import React from 'react';
import { useForm } from "react-hook-form";
import s from './login.module.css';
import {authAPI} from "../../API/api";
import {connect} from "react-redux";




export const LoginForm = () =>{
    const onSubmit = (data)  => Login(data);
    const { register, handleSubmit,
        formState: { errors }} = useForm();
    return (
        <div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Login Form</h1>
            <div>
                <input {...register("email", { required: true,
                    maxLength: 40 })} placeholder={" e-mail"} />
                {errors?.email?.type === "required" && <span>This field is required</span>}
                {errors?.email?.type === "maxLength" && (
                    <span>This field cannot exceed 40 characters</span>
                )}
            </div>
            <div>
                <input {...register("password", { required: true,maxLength : 30}
                )} placeholder={" password"}/>
                {errors?.password?.type === "required" && <span>This field is required</span>}
                {errors?.password?.type === "maxLength" && (
                    <span>This field cannot exceed 30 characters</span>
                )}
            </div>
            <div>
                <input {...register("rememberMe")} type="checkbox" />
                Remember me
            </div>
            <input type="submit" value="Login" />
        </form>
        </div>
    )
}

export default function Login(data) {
    authAPI.login(data);
    return (
        <div >
           <LoginForm/>
        </div>
    );
}

//updateAction - скорее всего это actionCreator
// connect(({ email, password, rememberMe }) => ({ email, password, rememberMe }), updateAction)(Login);
