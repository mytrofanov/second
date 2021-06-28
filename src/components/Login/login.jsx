import React from 'react';
import { useForm } from "react-hook-form";
import s from './login.module.css';
import {authAPI} from "../../API/api";


export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data)  => authAPI.login(data);

    return (
        <div className={s.loginForm}>
            <h1>Login Form</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input {...register("email")} placeholder={" e-mail"} />
            </div>
            <div>
            <input {...register("password")} placeholder={" password"}/>
            </div>
            <div>
            <input {...register("rememberMe")} type="checkbox" />
                Remember me
            </div>
            <input type="submit" value="Login" />
        </form>
        </div>
    );
}



