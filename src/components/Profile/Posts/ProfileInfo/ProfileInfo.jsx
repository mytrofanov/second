import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus }) => {
    if (!profile) {
        return  <Preloader/>
    }
    const ava = !profile.photos.large? mask: profile.photos.large;
    //подставляю маску вместо аватарки если ее нет у юзера

    return (
        <div>

        <img className={s.about} src={ava} />

            <div className={s.about}>
                Имя:  {profile.fullName}
            </div>
            <div className={s.about}>
               О мне:  {profile.aboutMe}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    )
}


export default ProfileInfo;