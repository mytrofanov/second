import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {saveProfileForm} from "../../Redux/profile-reducer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner ={props.isOwner}
                         savePhoto ={props.savePhoto}
                         saveProfileForm={props.saveProfileForm}
                         setEditMode={props.setEditMode}
                         editMode={props.editMode}
                        />
            <MyPostsContainer  />

        </div>)
}


export default Profile;