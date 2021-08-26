import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileForm} from "./ProfileForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, contacts, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    const goToEditMode = () =>{
        setEditMode(editMode=!editMode)};

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
    const onSubmit = (values) => {
        console.log(values)
        saveProfile(values)
        goToEditMode()
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
                {editMode ? <ProfileForm profile={profile}  onSubmit={onSubmit}/>
                        : <ProfileData profile={profile}
                                       isOwner={isOwner}
                                       goToEditMode={goToEditMode}/>
                }

            </div>
        </div>


    )
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div className={s.ProfileData}>
        <div className={s.about}>
            Имя: {profile.fullName}
        </div>
        <div className={s.about}>
            О мне: {profile.aboutMe}
        </div>
        <div className={s.about}>
            Ищу работу: {profile.lookingForAJob ? <span>Да</span> &&
            <div>My Professional Skills: {profile.lookingForAJobDescription}</div> : <span>Нет</span>}
        </div>
        <div>
            <b>Контакты:</b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })
            }
        </div>
        {isOwner && <button className={s.editProfile} onClick={goToEditMode}> 🛠 Редактировать профиль</button>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}


export default ProfileInfo;