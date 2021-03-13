import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
<div>
     
<div className={s.item}> 
<img src='https://i.insider.com/5de2ca2b79d7577f925703f2?width=1124&format=jpeg'/>

{ props.message }
</div>
<div className={s.item__like}> { props.count }  Like      
<span>  { props.discount }   Dislike</span>
</div>

</div>

        )
}

export default Post;