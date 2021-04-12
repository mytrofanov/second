import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <Posts  updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}  />)
}


export default MyPostsContainer;