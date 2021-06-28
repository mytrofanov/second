import React from 'react';
import { useForm } from "react-hook-form";
import s from './login.module.css';
import {authAPI} from "../../API/api";




export default function Login() {
    const { register, handleSubmit,
        formState: { errors }} = useForm();
    const onSubmit = (data)  => authAPI.login(data);

    return (
        <div >

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
    );
}



