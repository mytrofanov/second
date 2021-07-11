import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }

    return (
        <div>

        <img className={s.about} src={props.profile.photos.large}/>

            <div className={s.about}>
                Имя:  {props.profile.fullName}
            </div>
            <div className={s.about}>
               О мне:  {props.profile.aboutMe}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>

    )
}


export default ProfileInfo;