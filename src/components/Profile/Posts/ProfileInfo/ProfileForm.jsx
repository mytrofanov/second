import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";

export const ProfileForm = ({goToEditMode, profile, onSubmit}) => {


    return <div>
        <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
    </div>
}

export const ProfileDataForm = ({onSubmit, profile}) => {

    const inputCreator = (divName, inputName, placeholder) => {
        return <div>
            {divName}  :  <input {...register(inputName)} placeholder={placeholder}/>
        </div>
    }

    const {
        setError,
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const load = async () => {

        return {
            fullName: 'erikras',

        }
    }
    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div>Имя: <input {...register("fullName")} placeholder={profile.fullName}/></div>
                    <div>Обо мне: <input {...register("aboutMe")} placeholder={profile.aboutMe}/></div>
                    <div>Ищу работу: <input {...register("lookingForAJob")} type="checkbox"/></div>
                    <div>Мои навыки: <input {...register("lookingForAJobDescription")}
                                            placeholder={profile.lookingForAJobDescription}/></div>
                    <b>Контакты:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return < div key={key}>
                             {inputCreator(key, "contacts." + key, profile.contacts[key])}
                        < /div>
                    })
                    }
                </div>

                <input className={s.editProfile} type="submit" value="💾 Save"/>

            </form>

        </div>
    )
}