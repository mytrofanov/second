import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import { useForm} from "react-hook-form";


const Posts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} count={p.count} discount={p.discount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div>

                 <div className={s.block}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div>
                <NewPostForm />
            </div>

            <div className={s.post}> New Posts</div>

            {postsElements}

        </div>
    )
}

export default Posts;


export function NewPostForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={s.hookForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("newPostFormMessage")} />
            <input type="submit" value="Добавить сообщение" />
        </form>
        </div>
    );
}
