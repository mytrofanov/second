import React from 'react';
import s from './Sidebar.module.css'
import Friends from "../Friends/Friends";


let Sidebar = ({totalFriendsCount,friendsPageSize, currentFriendsPage, onFriendsPageChanged, friends}) => {

    return (
        <div className={s.Sidebar}>
            <div className={s.friends}> Мои друзья:</div>

            <Friends totalFriendsCount={totalFriendsCount} friendsPageSize={friendsPageSize}
                              currentFriendsPage={currentFriendsPage} onFriendsPageChanged={onFriendsPageChanged}
                              friends={friends}/>
        </div>
    )
}

export default Sidebar;