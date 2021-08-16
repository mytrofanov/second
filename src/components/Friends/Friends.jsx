import React from "react";
import Paginator from "../common/paginator/Paginator";
import Friend from "./Friend";
import s from "./friends.module.css"


let Friends = ({currentFriendsPage, onFriendsPageChanged, friendsPageSize, totalFriendsCount, friends, ...props}) => {
    return <div className={s.friendsBlock}>

        {friendsPageSize>3?
            <Paginator totalUsersCount={totalFriendsCount} pageSize={friendsPageSize}
                       onPageChanged={onFriendsPageChanged} currentPage={currentFriendsPage}/>: null
        }


        {friends.map(u =>
            <Friend key={u.id}
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