import React from "react";
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }



        return <div>
            <div className={styles.pageNumber}>
                {pages.map(p => {
                    if (p <= this.props.currentPage + 5 & p >= this.props.currentPage - 5)
                        return (<span className={p === this.props.currentPage ? styles.selectedPage : styles.nonSelectedPage}
                                 onClick={(event) => {
                                     this.onPageChanged(p);
                                 }}> {p} </span>);
                })}
                <span className={styles.totalPages}> Всего страниц: {this.props.totalUsersCount}</span>
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>UnFollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
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

}

export default Users;