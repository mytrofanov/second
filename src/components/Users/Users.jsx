import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";



let Users = ({currentPage, onPageChanged ,pageSize ,totalUsersCount ,...props}) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   onPageChanged={onPageChanged} currentPage={currentPage}/>

        {props.users.map(u =>
            <User key={u.id}
                  user={u}
                  followingInProgress={props.followingInProgress}
                  unfollow={props.unfollow}
                  follow={props.follow}
            />
        )
        }
    </div>
}

export default Users;