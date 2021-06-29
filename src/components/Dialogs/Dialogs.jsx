import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.ava} src={props.avatar}/>"
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

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.ava}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)


    let addNewMessage = (values) => {
        console.log(values.newMessageBody)
        props.sendMessage(values.newMessageBody);
    }

    return (

        <div className={s.dialogs}>
            <div className={s.block}>

            </div>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            {/*закрываются диалоги - АВАТАРКИ С ИМЕНАМИ*/}


            <div className={s.messages}>  {/*начало ТЕКСТА сообщений*/}
                <div>{messagesElements} </div>
                <div> {/*НАЧАЛО ПОЛЯ ВВОДА НОВОГО СООБЩЕНИЯ*/}
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
                {/*КОНЕЦ ПОЛЯ ВВОДА НОВОГО СООБЩЕНИЯ*/}
            </div>
            {/*конец блока сообщений*/}

        </div>

    )
}


export default Dialogs;


export const AddMessageForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => props.onSubmit(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("newMessageBody", {required: true, maxLength: 30})}
                   placeholder="enter your message"/>
            <input type="Submit" value="Send Message"/>
            {errors?.newMessageBody?.type === "required" && <span>This field is required</span>}
            {errors?.newMessageBody?.type === "maxLength" && (
                <span>This field cannot exceed 30 characters</span>
            )}
        </form>
    );
}
