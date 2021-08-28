import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";

export const ProfileForm = ({profile, onSubmit, callEditMode}) => {


    return <div>
        <ProfileDataForm profile={profile} onSubmit={onSubmit} callEditMode={callEditMode}/>
    </div>
}

export const ProfileDataForm = ({onSubmit, profile, callEditMode}) => {

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

    const profileError = profile.error;
    const websiteError = (profileError) => {
        console.log(profileError)
        let result = profileError[0].match(/Website(Website)/);
        let mistake1 = result.length
        let mistake2 = result[1]
        let mistake = result[0]
        return <div>
            <div> {mistake} </div>
            <div> {mistake1} </div>
            <div> {mistake2} </div>

        </div>
    }


    return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div>Имя: <input {...register("fullName")} placeholder={profile.fullName}
                                     defaultValue={profile.fullName}/></div>
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
                <button className={s.editProfile} onClick={callEditMode}><b>↪</b> Вернуться без изменений</button>
                <div className={s.profileError}>
                    {profileError && profileError}
                </div>


            </form>

        </div>
    )
}