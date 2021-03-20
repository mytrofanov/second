import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";


import s from './Profile.module.css'


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>

        </div>)
}


export default Profile;