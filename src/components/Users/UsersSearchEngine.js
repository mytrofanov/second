import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Highlight} from "./highlight/Highlight";
import Preloader from "../common/preloader/preloader";
import {css} from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Alert from '@mui/material/Alert';
import s from './users.module.css'
import {NavLink} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import userPhoto from "../../assets/images/user.png";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


export default function UsersSearchEngine({followingInProgress, follow, unfollow}) {

    const [postsFromServer, setPostsFromServer] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [inputTextValue, setInputTextValue] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const [serverError, setServerError] = useState('')


    //================ preloader ======================
    const delayLoadingFetchToFalse = () => {
        setLoading(false)
    }
    const override = css`
      display: block;
      z-index: 1000;
      position: fixed;
      margin-top: 18px;
      margin-left: 195px;
      border-color: red;
    `;


    // =============== filtering  ==================
    const filter = useCallback(() => {

            const filtered =
                postsFromServer.filter((item) => {
                    return item.name.toLowerCase().includes(inputTextValue.toLowerCase())
                })

            setFilteredPosts(filtered)

        }, [inputTextValue, postsFromServer]
    )

    // ================ server request=================
    function FetchMessagesFromServer(URL) {

        setLoading(true);
        return axios
            .get(URL)
            .then(response => {
                let DataFromServer = response.data.items
                setTotalCount(response.data.totalCount)
                return setPostsFromServer(postsFromServer => postsFromServer.concat(DataFromServer))
            })
            .then(response => {
                setTimeout(delayLoadingFetchToFalse, 1000)
                filter()
            })
            .catch(error =>
                setServerError(error.toString())
            )
    }


    useEffect(() => filter(), [postsFromServer, inputTextValue, pageNumber, filter])


    // ================= buttons ========================
    const IncreasePageNumber = () => {
        let increasedPageNumber = pageNumber + 1
        FetchMessagesFromServer(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${increasedPageNumber}`)
            .catch(error => console.log(error))
        setPageNumber(increasedPageNumber);
    }
    //=========initialization, starting with first page:
    useEffect(() => {
        IncreasePageNumber()
    }, [])

    const StartSearching = () => {
        let AllPages = totalCount / 10

        if (inputTextValue.length > 0 && filteredPosts.length < 1 && pageNumber < AllPages && loading === false) {
            Get100Slow()
            if (pageNumber >= AllPages) {
                alert('Достигнут конец списка')
                return false
            }
        }
    }
    useEffect(() => {
        if (loading === true) {
            setTimeout(StartSearching(), 1000)
        }
        if (loading === false) {
            StartSearching()
        }

    }, [inputTextValue, filteredPosts])


    //===========button Get 100 posts consistently
    function Get100Slow() {
        setServerError('')
        let urls = []
        let i = pageNumber
        let b = pageNumber + 10
        while (i < b) {
            i++
            urls.push(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${i}`)
        }
        setPageNumber(prevState => prevState + 10)

        const getAllPagesSlow = async (urls) => {
            urls.map(FetchMessagesFromServer)
        }
        getAllPagesSlow(urls)
            .catch(error => console.log(error));

    }

//===========button Get 100 posts synchronously

    const Get100Fast = () => {
        let urlList = []
        let i = pageNumber
        let b = pageNumber + 10

        while (i < b) {
            i++
            urlList.push(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${i}`)
        }
        setPageNumber(prevState => prevState + 10)

        const getAllPagesFast = async (urlList) => {
            return Promise.all(urlList.map(FetchMessagesFromServer))
        }

        getAllPagesFast(urlList)
            .catch(error => console.log(error));
    }


    return (
        <div className={s.ContainerForSearchEngine}>
            {loading &&
            <PacmanLoader color={"#7D93C5"} css={override} size={15}/>
           }

            <div className={s.SearchBlockWithButton}>
                <div className="searchBlock">
               <span>

                   <Box
                       component="form"
                       sx={{

                           '& > :not(style)': {m: 1, width: '25ch'},
                       }}
                       noValidate
                       autoComplete="off"
                   >
      <TextField id="searchField" label="Найти пользователя"
          // sx={{color: "darkolivegreen"}}
                 color="primary"

                 variant="outlined"
                 value={inputTextValue}
                 key="searchField"
                 onChange={(event => {
                     setInputTextValue(event.target.value)
                     // filter(event.target.value)
                 })}
      />

    </Box>

            </span>


                </div>
                {inputTextValue.length > 0 && <Button sx={{
                    height: "40px",
                    mt: "15px"
                }}
                                                      onClick={Get100Slow} variant="contained" size="small">Следующие
                    100 записей </Button>
                }
            </div>
            <div>
                {serverError &&
                <Alert sx={{width: "400px"}} severity="error">Сервер ограничивает выдачу по 10 пользователей за раз.
                    Не стесняемся, жмем дальше. Сообщение сервера:
                    {serverError}</Alert>}
            </div>

            {inputTextValue.length > 0 && <div>
                <div>Отображено записей {filteredPosts.length} из {totalCount} </div>
                <b> Страница на сервере № {pageNumber} </b>

                <div>
                    {filteredPosts.map((user, index) =>
                        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <NavLink to={'/profile/' + user.id}>
                                        <Avatar alt={user.name}
                                                src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                    </NavLink>
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        <Highlight name={user.name} searchText={inputTextValue}/>

                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{display: 'inline'}}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {user.status}
                                            </Typography>

                                            {/*<div>*/}
                                            {/*    {user.followed &&  <Button variant="outlined" color="error"*/}
                                            {/*                  disabled={followingInProgress.some(id => id === user.id)}*/}
                                            {/*                  onClick={() => {*/}
                                            {/*                      unfollow(user.id);*/}
                                            {/*                  }}>*/}
                                            {/*            unfollow*/}
                                            {/*        </Button>}*/}
                                            {/*    {!user.followed &&  <Button variant="outlined" color="success"*/}
                                            {/*                  disabled={followingInProgress.some(id => id === user.id)}*/}
                                            {/*                  onClick={() => {*/}
                                            {/*                      follow(user.id);*/}
                                            {/*                  }}>*/}
                                            {/*            Follow*/}
                                            {/*        </Button>*/}

                                            {/*    }*/}
                                            {/*</div>*/}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <Divider variant="inset" component="li"/>
                        </List>)

                    }

                </div>
            </div>}
        </div>
    );
}

