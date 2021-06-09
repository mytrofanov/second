import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {Follow, unFollow} from "../../API/api";

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
                    ? <button disabled={props.followingInProgress} onClick={() => {

                        props.toggleFollowingProgress(true);
                        unFollow(u.id).then(data => {
                            if (data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                            props.toggleFollowingProgress(false);
                        });
                    }}>UnFollow</button>
                    : <button disabled={props.followingInProgress}  onClick={() => {

                        props.toggleFollowingProgress(true);
                        Follow(u.id).then(data => {
                        if (data.resultCode == 0) {
                            props.follow(u.id)
                        }
                            props.toggleFollowingProgress(false);
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