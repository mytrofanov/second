import React from "react";
import Friend from "./Friend";
import s from "./friends.module.css"
import {FriendsType} from "../../types/Types";

type FriendsPropsType = {
    totalFriendsCount: number
    friends: Array<FriendsType>

}

let Friends: React.FC<FriendsPropsType> = ({totalFriendsCount, friends}) => {



    return <div className={s.friendsBlock} >

        {friends===undefined? "Ошибка сервера" :
            friends.slice(0, 12).map(u =>
            <Friend friend={u}  key={new Date().getTime() + u.id} />
        )
        }
        <div className={s.friends} >
            <div className={s.totalFriends}>Всего друзей: </div>
            <div>{totalFriendsCount}</div>
        </div>
    </div>
}

export default Friends;