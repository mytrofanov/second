import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg',
                    followed: true,
                    fullName: 'Dmitriy',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg',
                    followed: false,
                    fullName: 'Max',
                    status: 'I am cool',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'http://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg',
                    followed: true,
                    fullName: 'Serg',
                    status: 'I am a good',
                    location: {city: 'New York', country: 'USA'}
                }
            ]
        )

    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={styles.usersPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>UnFollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
            </div>
        </span>
                <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>

            <span>
                 <div>{u.location.country}</div>
                 <div>{u.location.city}</div>
            </span>
        </span>
            </div>)
        }
    </div>
}

export default Users;