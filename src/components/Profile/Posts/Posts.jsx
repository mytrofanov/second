import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'





const Posts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    let postsElements = props.postData.map ( p =>  <Post message={p.post} count={p.count} discount={p.discount}/> )

    return (

        <div>
            <div className={s.block}>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={s.post}> New Posts</div>



            {postsElements}
        </div>
    )
}


export default Posts;