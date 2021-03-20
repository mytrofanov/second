import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";


import s from './Profile.module.css'



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts postData={props.postData} />

        </div>)
}


export default Profile;