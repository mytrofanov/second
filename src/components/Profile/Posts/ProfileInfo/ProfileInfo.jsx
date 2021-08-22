import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
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

    return (
        <div>
            <div className={s.container}>
                <img className={s.about} src={ava}/>
                {isOwner && <div className={s.overlay}>🖋</div>}
                {isOwner && <input type={"file"} className={s.bigPen} onChange={selectPhoto}/>}

            </div>
            <div className={s.about}>
                Имя: {profile.fullName}
            </div>
            <div className={s.about}>
                О мне: {profile.aboutMe}
            </div>
            <div className={s.status}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}


export default ProfileInfo;