import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import React from "react";
import {Avatar} from "@material-ui/core";
import portrait from '../../assets/images/portrait.jpg'
import s from './Header.module.css'

export const HeaderLoginBlock = ({isAuth, login, logoutReducer}) => {


    return (
        <div className={s.AvatarLoginBlock}>
            <div className={s.avatar}>
                {isAuth && <Avatar alt={login} src={portrait}/>}
            </div>
            <div>
                {isAuth && <Button variant="outlined" onClick={logoutReducer} color="inherit">Log out</Button>}
            </div>
            {!isAuth && <NavLink className={s.NavlinkButton}
                to={'/login'}><Button variant="outlined"  sx={{color:'white'}}

                                      color="inherit">Log in</Button></NavLink>}
        </div>
    )
}
