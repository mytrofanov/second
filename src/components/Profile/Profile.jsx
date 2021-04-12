import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPostsContainer from "./Posts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}     />

        </div>)
}


export default Profile;