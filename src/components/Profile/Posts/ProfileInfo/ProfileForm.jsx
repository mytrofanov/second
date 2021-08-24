import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";

export const ProfileForm = ({goToEditMode, profile}) => {


    return <div>
        <ProfileDataForm profile={profile}/>
        <div>
            <button className={s.editProfile} onClick={goToEditMode}>Save</button>
        </div>
    </div>
}

export const ProfileDataForm = ({onSubmit, profile}) => {
    console.log(profile)
    const inputCreator = (inputName, placeholder) => {
        return <div>
            <input {...register(inputName)} placeholder={placeholder}/>
        </div>
    }

    const {
        setError,
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const {onChange, ...rest} = register("loginError");
    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input {...register("Имя:")} placeholder={"имя"}/>
                    <input {...register("О мне:")} placeholder={"О мне:"}/>

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
                <div>
                    <input {...register("rememberMe")} type="checkbox"/>
                    Remember me
                </div>

                <input type="submit" value="Login"/>

            </form>

        </div>
    )
}