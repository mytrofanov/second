import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Nino'},
    {id: 6, name: 'Dina'},
    {id: 7, name: 'Pablo'}
]
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Whats up?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messages.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            {/*закрываются диалоги*/}


            <div className={s.messages}>  {/*начало сообщений*/}
                {messagesElements}
            </div>
            {/*конец блока сообщений*/}


        </div>

    )
}

export default Dialogs;