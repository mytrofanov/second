import React from "react";
import Friend from "./Friend";
import s from "./friends.module.css"


let Friends = ({currentFriendsPage, onFriendsPageChanged, friendsPageSize, totalFriendsCount, friends, ...props}) => {
    return <div className={s.friendsBlock}>

        {friends.map(u =>
            <Friend
                    friend={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
            />
        )
        }
    </div>
}

export default Friends;