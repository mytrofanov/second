import React from 'react';
import s from './Sidebar.module.css'


let Sidebar =  () => {
    return (
        <div className={s.Sidebar}>
        <div className={s.friends}> Мои друзья: </div>
        </div>
    )
}

export default Sidebar;