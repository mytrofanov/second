import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../types/Types";

type FriendPropsType = {
    friend: FriendsType
}

let Friend: React.FC<FriendPropsType> = ({friend}) => {

        return (
            <div id={friend.name}>
                <div className={s.friend} id={friend.name + friend.status}>
                    <NavLink to={'/profile/' + friend.id}>
                        <img src={friend.photos!.small != null ? friend.photos!.small : userPhoto}
                             alt={"User's ava"} className={s.usersPhoto}/>
                    </NavLink>
                    <div id={friend.name}>{friend.name}</div>
                    <div id={friend.status}>{friend.status}</div>
                </div>


            </div>)

}


export default Friend;