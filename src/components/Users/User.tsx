import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../types/Types";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

type UserPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    follow: (userId: number | null) => void
    unfollow: (userId: number | null) => void

}

let User:React.FC<UserPropsType> = ({user, followingInProgress, unfollow, follow}) => {


    return (
        <div>
                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <NavLink to={'/profile/' + user.id}>
          <Avatar alt={user.name} src={user.photos!.small != null ? user.photos!.small : userPhoto} />
            </NavLink>
        </ListItemAvatar>
        <ListItemText
            primary={user.name}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {user.status}
                    </Typography>
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
                </React.Fragment>
            }
        />
          </ListItem>
                      <Divider variant="inset" component="li" />
          </List>

        </div>)

}
export default User;