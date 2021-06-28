import React from 'react';
import { useForm } from "react-hook-form";
import s from './login.module.css';
import {authAPI} from "../../API/api";



export default function Login() {
    const { register, handleSubmit,
        formState: { errors }} = useForm();
    const onSubmit = (data)  => authAPI.login(data);

    return (
        <div className={s.loginForm}>
            <h1>Login Form</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input {...register("email", { required: true,
                maxLength: 40 })} placeholder={" e-mail"} />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "maxLength" && (
                    <p>This field cannot exceed 40 characters</p>
                )}
            </div>
            <div>
            <input {...register("password", { required: true,maxLength : 30}
            )} placeholder={" password"}/>
                {errors?.password?.type === "required" && <p>This field is required</p>}
                {errors?.password?.type === "maxLength" && (
                    <p>This field cannot exceed 30 characters</p>
                )}
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



