import React from 'react';
import s from './Sidebar.module.css'

import FriendsContainer from "../Friends/FriendsContainer";
import {setFriendsPageSize} from "../../Redux/users-reducer";



let Sidebar = () => {

    return (
        <div className={s.Sidebar}>
            <div className={s.friends}> Мои друзья:</div>
            <FriendsContainer  />
        </div>
    )
}

export default Sidebar;