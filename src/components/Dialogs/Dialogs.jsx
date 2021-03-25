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

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.ava}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let newPostElement = React.createRef();  /*ссылка для кнопки добавления сообщений*/
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.block}> {/*начало блока добавления сообщений*/}
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div> {/*конец блока добавления сообщений*/}

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