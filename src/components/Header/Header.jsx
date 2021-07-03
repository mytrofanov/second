import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
       return (
        <header className={s.header}>
            <img
                src='https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243677-stock-photo-real-estate-logo.jpg'
                alt='Логотип'></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        {props.login}
                        <div><button onClick={props.logoutReducer}>Log out</button></div>
                    </div>:
                        <NavLink to={'/login'}> Login </NavLink>}

            </div>
        </header>)
}


export default Header;