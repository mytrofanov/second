import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/Screenshot_1.jpg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderLoginBlock} from "./HeaderLoginBlock";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutReducer: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (


        <header className={s.header}>


            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Social Network
                        </Typography>
                        <HeaderLoginBlock isAuth={props.isAuth} login={props.login}
                                          logoutReducer={props.logoutReducer} />


                    </Toolbar>

                </AppBar>
            </Box>

            <div className={s.loginBlock}>


            </div>
        </header>
    )
}


export default Header;