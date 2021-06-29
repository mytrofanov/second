import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import {useForm} from "react-hook-form";


const Posts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} count={p.count} discount={p.discount}/>)

    let newPostElement = React.createRef();


    let addNewPost = (value) => {
        props.addPost(value.newPost);

    }

    return (

        <div>

            <div>
                <NewPostForm onSubmit={addNewPost}/>
            </div>

            <div className={s.post}> New Posts</div>

            {postsElements}

        </div>
    )
}

export default Posts;


export const NewPostForm = (props) => {
    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const onSubmit = data => props.onSubmit(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("newPost", {required: true, maxLength: 30}
            )} placeholder="enter your post"/>
            <input type="Submit" value="Send Message"/>
            {errors?.newPost?.type === "required" && <span>This field is required</span>}
            {errors?.newPost?.type === "maxLength" && (
                <span>This field cannot exceed 30 characters</span>
            )}
        </form>
    );
}