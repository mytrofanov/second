import React from 'react';
import s from './Sidebar.module.css'

import FriendsContainer from "../Friends/FriendsContainer";
import Friend from "../Friends/Friend";
import UsersContainer from "../Users/UsersContainer";


let Sidebar = () => {
    return (
        <div className={s.Sidebar}>
            <div className={s.friends}> Мои друзья:</div>

        </div>
    )
}

export default Sidebar;