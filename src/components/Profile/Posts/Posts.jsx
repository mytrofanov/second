import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'


const Posts = (props) => {
    let postsElements =
        props.posts.map( p =>  <Post message={p.message} count={p.count} discount={p.discount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( {type: 'ADD-POST' });
            }
debugger;
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (

        <div>
            <div className={s.block}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText} />
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