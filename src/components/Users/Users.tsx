import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/Types";

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    onPageChanged: ()=> void
    unfollow: ()=> void
    follow: ()=> void
}


let Users: React.FC <PropsType> = ({currentPage, onPageChanged ,pageSize ,totalUsersCount ,...props}) => {
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

// @ts-ignore
export default Users;