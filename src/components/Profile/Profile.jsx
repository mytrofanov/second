import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";


import s from './Profile.module.css'



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost}
                   />

        </div>)
}


export default Profile;