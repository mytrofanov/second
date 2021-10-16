import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileForm} from "./ProfileForm";
import {ContactsType, ProfilePropsType, ProfileType} from "../../../../types/Types";



const ProfileInfo: React.FC<ProfilePropsType>= ({profile, status,
                                                    updateStatus, isOwner, savePhoto,
                                                    saveProfileForm, setEditMode, editMode}) => {

    const callEditMode = (editMode:boolean) => {
        setEditMode(editMode)
    }

    if (!profile) {
        return <Preloader/>
    }
    const ava:string = !profile.photos!.large ? mask : profile.photos!.large;
    //подставляю маску вместо аватарки если ее нет у юзера

    const selectPhoto = (e:any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (data:any) => {
        saveProfileForm(data)
    }

    return (
        <div>
            <div className={s.ProfileInfo}>
                <div className={s.container}>
                    <img alt={"ava"} className={s.userPortraitOnProfile} src={ava}/>
                    {isOwner && <div className={s.overlay}>🖋</div>}
                    {isOwner && <input type={"file"} className={s.bigPen} onChange={selectPhoto}/>}

                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
                {editMode ? <ProfileForm profile={profile} onSubmit={onSubmit} callEditMode={() => {
                        callEditMode(false)
                    }}/> :
                    <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => {
                        callEditMode(true)
                    }}/>
                }


            </div>
        </div>


    )
}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    setEditMode: (editMode:boolean)=>void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, setEditMode}) => {

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
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
            })
            }
        </div>
        {isOwner && <button className={s.editProfile} onClick={() => {
            setEditMode(true)
        }}> 🛠 Редактировать профиль</button>}
        <div className={s.profileError}>
            {profile.error && profile.error}
        </div>
    </div>
}
type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}


export default ProfileInfo;