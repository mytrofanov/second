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
            {divName} : <input {...register(inputName)} placeholder={placeholder} defaultValue={placeholder}/>

        </div>
    }

    const {
        setError,
        register, handleSubmit,
        formState: {errors}
    } = useForm();

    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div>Имя: <input {...register("fullName")} placeholder={profile.fullName}
                                     defaultValue={profile.fullName}
                                     onSubmit={onSubmit}/></div>
                    <div>Обо мне: <input {...register("aboutMe")} placeholder={profile.aboutMe}
                                         defaultValue={profile.aboutMe}/></div>
                    <div>Ищу работу: <input {...register("lookingForAJob")} type="checkbox"
                                            defaultValue={profile.lookingForAJob}/></div>
                    <div>Мои навыки: <input {...register("lookingForAJobDescription")}
                                            placeholder={profile.lookingForAJobDescription}
                                            defaultValue={profile.lookingForAJobDescription}/></div>
                    <b>Контакты:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return < div key={key}>
                            {inputCreator(key, "contacts." + key, profile.contacts[key])}
                        < /div>
                    })
                    }
                </div>

                <input className={s.editProfile} type="submit" value="💾 Save"/>
                <div className={s.profileError}>
                    {profile.error && profile.error}
                </div>
            </form>

        </div>
    )
}