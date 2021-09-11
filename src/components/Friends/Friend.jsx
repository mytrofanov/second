import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Friend = ({friend}) => {

    return (
        <div id={friend.id}>
            {friend=<div className={s.friend} id={friend.id}>
                <NavLink to={'/profile/' + friend.id}>
                    <img src={friend.photos.small != null ? friend.photos.small : userPhoto}
                         alt={"User's ava"} className={s.usersPhoto}/>
                </NavLink>
                <div id={friend.name}>{friend.name}</div>
                <div id={friend.status}>{friend.status}</div>
            </div>}


        </div>)

}


export default Friend;