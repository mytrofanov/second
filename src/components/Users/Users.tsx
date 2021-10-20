import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/Types";
import s from './users.module.css'
import TextField from '@mui/material/TextField';
import UsersSearchEngine from './UsersSearchEngine'

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    onPageChanged: (pageNumber:number)=> void
    unfollow: (userId:number | null)=> void
    follow: (userId:number | null)=> void
    index: number
}


let Users: React.FC <PropsType> = ({currentPage, onPageChanged ,pageSize ,totalUsersCount ,...props}) => {



    return <div className={s.UsersBlock}>
        <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   onPageChanged={onPageChanged} currentPage={currentPage}/>

        {props.users.map((u) =>
            <User
                  key={u.id}
                  user={u}
                  followingInProgress={props.followingInProgress}
                  unfollow={props.unfollow}
                  follow={props.follow}
            />
        )
        }
        </div>
        <div className={s.UserSearchBlock}>
            <UsersSearchEngine/>

        </div>
    </div>
}

// @ts-ignore
export default Users;