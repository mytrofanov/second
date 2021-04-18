import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.ava} src={props.avatar} />"
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id}  id={d.id} avatar={d.ava}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
         }

    return (

        <div className={s.dialogs}>
            <div className={s.block}>

            </div> {/*ПЕРВЫЙ СТОЛБЕЦ - ВОЗМОЖНО ДЛЯ ДОБАЛЕНИЯ ПОЛЯ ВВОДА*/}

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            {/*закрываются диалоги - АВАТАРКИ С ИМЕНАМИ*/}


            <div className={s.messages}>  {/*начало ТЕКСТА сообщений*/}
                <div>{messagesElements} </div>
                <div> {/*НАЧАЛО ПОЛЯ ВВОДА НОВОГО СООБЩЕНИЯ*/}
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your Message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send Message</button></div>
                </div> {/*КОНЕЦ ПОЛЯ ВВОДА НОВОГО СООБЩЕНИЯ*/}
            </div>
            {/*конец блока сообщений*/}

        </div>

    )
}

export default Dialogs;