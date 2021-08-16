import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Friend = ({friend}, ...props) => {

    return (
        <div>
            <div>
                <NavLink to={'/profile/' + friend.id}>
                    <img src={friend.photos.small != null ? friend.photos.small : userPhoto} className={s.usersPhoto}/>
                </NavLink>
                <div>{friend.name}</div>
                <div>{friend.status}</div>

            </div>


        </div>)

}


export default Friend;