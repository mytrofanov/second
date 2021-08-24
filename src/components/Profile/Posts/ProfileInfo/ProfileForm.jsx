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
    console.log(profile.contacts)
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

                <div>Имя:
                    <input {...register("profile.fullName")} placeholder={profile.fullName}/>
                    <div>Обо мне: <input {...register("profile.aboutMe")} placeholder={profile.aboutMe}/></div>
                    <div>Ищу работу: <input {...register("profile.lookingForAJob")} type="checkbox"/></div>
                    <div>Мои навыки: <input {...register("profile.lookingForAJobDescription")}
                                            placeholder={profile.lookingForAJobDescription}/></div>
                    <b>Контакты:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return < div key={key}>
                            {inputCreator(key, key)}
                        < /div>
                    })
                    }
                </div>

               <input type="submit" value="Save"/>

            </form>

        </div>
    )
}