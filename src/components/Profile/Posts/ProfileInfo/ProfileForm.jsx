import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";

export const ProfileForm = ({goToEditMode, profile}) => {
    const onSubmit = () => {
        goToEditMode()
    }

    return <div>
        <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
    </div>
}

export const ProfileDataForm = ({onSubmit, profile}) => {

    const inputCreator = (inputName, placeholder) => {
        return <div>
            {inputName}  :  <input {...register(inputName)} placeholder={placeholder}/>
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
                    <div>Имя: <input {...register("profile.fullName")} placeholder={profile.fullName}/></div>
                    <div>Обо мне: <input {...register("profile.aboutMe")} placeholder={profile.aboutMe}/></div>
                    <div>Ищу работу: <input {...register("profile.lookingForAJob")} type="checkbox"/></div>
                    <div>Мои навыки: <input {...register("profile.lookingForAJobDescription")}
                                            placeholder={profile.lookingForAJobDescription}/></div>
                    <b>Контакты:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return < div key={key}>
                             {inputCreator(key, profile.contacts[key])}
                        < /div>
                    })
                    }
                </div>

                <input className={s.editProfile} type="submit" value="💾 Save"/>

            </form>

        </div>
    )
}