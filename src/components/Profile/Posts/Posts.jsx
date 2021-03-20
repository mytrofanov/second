import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'

let postData = [
    {id: 1, post: 'First post', count: 5, discount: 0},
    {id: 2, post: 'Second post', count: 7, discount: 1},
    {id: 3, post: 'Third post', count: 8, discount: 10},
    {id: 4, post: 'Forth post', count: 9, discount: 4},
    {id: 5, post: 'Fifth post', count: 10, discount: 2},
    {id: 6, post: 'Six post', count: 11, discount: 3},
    {id: 7, post: 'Seven post', count: 14, discount: 4},
]

let postsElements = postData.map ( p =>  <Post message={p.post} count={p.count} discount={p.discount}/> )

const Posts = () => {
    return (
        <div>
            {postsElements}
        </div>
    )
}


export default Posts;