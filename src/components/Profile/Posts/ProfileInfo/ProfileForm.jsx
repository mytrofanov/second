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
        register, handleSubmit,
        formState: {errors}
    } = useForm();


    const profileError = profile.error;

     return (
        <div className={s.loginPage}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div>Имя: <input {...register("fullName")} placeholder={profile.fullName}
                                     defaultValue={profile.fullName}/></div>
                    <div>Обо мне: <input {...register("aboutMe")} placeholder={profile.aboutMe}
                                         defaultValue={profile.aboutMe}/></div>
                    <div>Ищу работу: <input {...register("lookingForAJob")} type="checkbox"/></div>
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