import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/Screenshot_1.jpg";

const Header = (props) => {
       return (
        <header className={s.header}>
            <img src={logo} className={s.logo}
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