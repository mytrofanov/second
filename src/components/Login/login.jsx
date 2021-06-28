import React from 'react';
import { useForm } from "react-hook-form";
import s from './login.module.css';


export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={s.loginForm}>
            <h1>Login Form</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input {...register("login")} placeholder={" login"} />
            </div>
            <div>
            <input {...register("password")} placeholder={" password"}/>
            </div>
            <div>
            <input {...register("checkbox")} type="checkbox" />
                Remember me
            </div>
            <input type="submit" value="Login" />
        </form>
        </div>
    );
}



