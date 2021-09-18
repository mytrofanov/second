import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {ProfilePropsType} from "../../types/Types";



const Profile: React.FC<ProfilePropsType> = (props) => {

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