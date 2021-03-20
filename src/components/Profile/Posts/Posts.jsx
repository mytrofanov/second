import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'





const Posts = (props) => {

    let postsElements = props.postData.map ( p =>  <Post message={p.post} count={p.count} discount={p.discount}/> )

    return (
        <div>
            {postsElements}
        </div>
    )
}


export default Posts;