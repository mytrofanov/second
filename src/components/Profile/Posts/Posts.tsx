import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import {useForm} from "react-hook-form";
import {PostsType} from "../../../types/Types";

export type MapPropsType = {
    posts: Array<PostsType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const Posts: React.FC<MapPropsType & DispatchPropsType > = React.memo(props => {

    let postsElements =
        [...props.posts].reverse().map(p => <Post message={p.message} count={p.count} discount={p.discount}/>)

    let addNewPost = (value:any) => {
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
});

export default Posts;


export const NewPostForm = (props:any) => {

    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();
    const onSubmit = (data:any) => props.onSubmit(data);
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
};