import React from "react";
import Friend from "./Friend";
import s from "./friends.module.css"


let Friends = ({totalFriendsCount, friends}) => {
    return <div className={s.friendsBlock}>


        {friends.slice(0, 3).map(u =>
            <Friend friend={u}
            />
        )
        }
        <div className={s.friends}>
            <div>Всего друзей:</div>
            <div>{totalFriendsCount}</div>
        </div>
    </div>
}

export default Friends;