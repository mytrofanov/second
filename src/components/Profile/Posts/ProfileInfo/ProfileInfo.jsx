import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div> <img src='https://theinpaint.com/images/example-1-1.jpg' /> </div>
            <div className={s.block}>
            <textarea></textarea>
            <div>
            <button>Add Post</button>
            </div>
            </div>

            <div className={s.post}> New Posts</div>
        </div>

    )
}


export default ProfileInfo;