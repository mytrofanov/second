import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pageNumber}>
            {pages.map(p => {
                if (p <= props.currentPage + 5 & p >= props.currentPage - 5)
                    return (<span
                        className={p === props.currentPage ? styles.selectedPage : styles.nonSelectedPage}
                        onClick={(event) => {
                            props.onPageChanged(p);
                        }}> {p} </span>);
            })}
            <span className={styles.totalPages}> Всего страниц: {props.totalUsersCount}</span>
        </div>

        {props.users.map(u => <div key={u.id}>
        <span>
            <div>

                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
              </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        // в delete параметр withCredentials отправляется вторым
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {withCredentials: true, headers: {
                                    "API-KEY": "d0f249f5-23ff-48d0-b8e9-a154edff15d4"
                                }},
                        ).then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                        });


                    }}>UnFollow</button>
                    : <button onClick={() => {
                        // в post параметр withCredentials отправляется третьим
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            {withCredentials: true,  headers: {
                                    "API-KEY": "d0f249f5-23ff-48d0-b8e9-a154edff15d4"
                                }}
                                                ).then(response => {
                        if (response.data.resultCode == 0) {
                            props.follow(u.id)
                        }
                        });


                    }}>Follow</button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>

            <span>
                 <div>{"u.location.country"}</div>
                 <div>{"u.location.city"}</div>
            </span>
        </span>
        </div>)
        }
    </div>
}


export default Users;