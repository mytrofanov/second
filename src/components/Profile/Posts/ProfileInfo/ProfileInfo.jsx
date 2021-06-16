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
            <div> <img src='https://theinpaint.com/images/example-1-1.jpg' /> </div>
        <img className={s.about} src={props.profile.photos.large}/>

            <div className={s.about}>
                Имя:  {props.profile.fullName}
            </div>
            <div className={s.about}>
               О мне:  {props.profile.aboutMe}
            </div>
            <ProfileStatus status={"Hello my friends"}/>
        </div>

    )
}


export default ProfileInfo;