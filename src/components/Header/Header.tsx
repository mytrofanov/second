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


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutReducer: ()=> void
}

const Header: React.FC<HeaderPropsType> = (props) => {
       return (
           <div>
               <Box sx={{ flexGrow: 1 }}>
                   <AppBar position="static">
                       <Toolbar>
                           <IconButton
                               size="large"
                               edge="start"
                               color="inherit"
                               aria-label="menu"
                               sx={{ mr: 2 }}
                           >
                               <MenuIcon />
                           </IconButton>
                           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                               Social Network
                           </Typography>
                           <Button color="inherit">Login</Button>
                       </Toolbar>
                   </AppBar>
               </Box>



        <header className={s.header}>
            <img src={logo} className={s.logo} alt='Логотип'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        {props.login}
                        <div><button onClick={props.logoutReducer}>Log out</button></div>
                    </div>:
                        <NavLink to={'/login'}> Login </NavLink>}

            </div>
        </header>
           </div>
       )
}


export default Header;