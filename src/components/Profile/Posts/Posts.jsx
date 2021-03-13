import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'


const Posts = () => {
    return (
        <div>
        <textarea></textarea>
        <button>Add Post</button>
        <div className={s.post}>
          
        <Post message='First post'  count='5' discount='0' />
        <Post message='Second post' count='6' discount='1'/>
        <Post message='Third post' count='7' discount='2'/>
        <Post message='Forth post' count='8' discount='3'/>
        
        </div>
      </div>)
}


export default Posts;