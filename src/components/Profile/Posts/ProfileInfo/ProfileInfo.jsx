import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileForm} from "./ProfileForm";
import {saveProfileForm} from "../../../../Redux/profile-reducer";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfileForm, setEditMode, editMode}) => {
    console.log("ProfileInfo:" + editMode);
    const callEditMode =(mode)=>{
        setEditMode(mode)
    }

    if (!profile) {
        return <Preloader/>
    }
    const ava = !profile.photos.large ? mask : profile.photos.large;
    //подставляю маску вместо аватарки если ее нет у юзера

    const selectPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = () => {
        console.log("Сохранение формы")
        saveProfileForm()
    }

    return (
        <div>
            <div className={s.ProfileInfo}>
                <div className={s.container}>
                    <img className={s.about} src={ava}/>
                    {isOwner && <div className={s.overlay}>🖋</div>}
                    {isOwner && <input type={"file"} className={s.bigPen} onChange={selectPhoto}/>}

                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode ? <ProfileForm profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} setEditMode={()=>{callEditMode(true)}} />
                }


            </div>
        </div>


    )
}


const ProfileData = ({profile, isOwner, setEditMode}) => {

    return <div className={s.ProfileData}>
        <div className={s.about}>
            Имя: {profile.fullName}
        </div>
        <div className={s.about}>
            О мне: {profile.aboutMe}
        </div>
        <div className={s.about}>
            Ищу работу: {profile.lookingForAJob ? "yes" : "no"}

            <div className={s.about}>
                Professional skills: {profile.lookingForAJobDescription}</div>
        </div>
        <div>
            <b>Контакты:</b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })
            }
        </div>
        {isOwner && <button className={s.editProfile} onClick={()=>{setEditMode(true)}}> 🛠 Редактировать профиль</button>}
        <div className={s.profileError}>
            {profile.error && profile.error}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}


export default ProfileInfo;