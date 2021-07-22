import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import mask from "./../../../../assets/images/mask.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }
    const ava = !props.profile.photos.large? mask: props.profile.photos.large;
    //подставляю маску вместо аватарки если ее нет у юзера

    return (
        <div>

        <img className={s.about} src={ava} />

            <div className={s.about}>
                Имя:  {props.profile.fullName}
            </div>
            <div className={s.about}>
               О мне:  {props.profile.aboutMe}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    )
}


export default ProfileInfo;