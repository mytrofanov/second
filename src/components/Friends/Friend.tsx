import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../types/Types";
import {Avatar} from "@mui/material";

type FriendPropsType = {
    friend: FriendsType
}

let Friend: React.FC<FriendPropsType> = ({friend}) => {

        return (
            <div id={friend.name} key={friend.id}>
                <div className={s.friend} id={friend.name + friend.status} key={friend.id + friend.name}>
                    <NavLink className={s.FriendAvatar} to={'/profile/' + friend.id} key={friend.id + friend.name + friend.uniqueUrlName}>
                        {friend.photos!.small !=null && <Avatar
                            alt={friend.name}
                            src={friend.photos!.small!}
                            sx={{ width: 90, height: 90 }}
                            key = {friend.id+new Date().getTime()}
                        />}
                        {friend.photos!.small ===null && <Avatar
                            alt={friend.name}
                            src={userPhoto}
                            sx={{ width: 90, height: 90 }}
                            key={friend.name + friend.id}
                        />}
                    </NavLink>


                </div>


            </div>)

}


export default Friend;