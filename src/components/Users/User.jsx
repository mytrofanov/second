import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let User = ({user,followingInProgress, unfollow,follow }) => {

    return (
    <div>
        <span>
            <div>

                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
              </NavLink>
            </div>
            <div>

                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>
                        UnFollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>
                        Follow</button>}
            </div>
        </span>
            <span>
            <span className={styles.userName}>
                <div className={styles.userBlock}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                    </div>
            </span>

        </span>
        </div>)

}



export default User;