import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

type DialogItemPropsType = {
    id: number
    avatar?: string
    name: string
}
type MessagePropsType = {
    message: string
}
type MessagesType = {
    id: number
    message: string
}
type  MessagesPropsType = {
    messages: Array<MessagesType>
}

type DialogsType = {
    dialogs: Array<DialogItemPropsType>
}

type DialogsPageType = {
    dialogsPage: DialogsType & MessagesPropsType
}

type SendMessageType = {
    sendMessage: (values:string) => any
}

type DialogsPropsType = DialogsPageType & DialogsType & MessagesPropsType & SendMessageType


const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img alt={"Avatar"} className={s.ava} src={props.avatar}/>"
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.ava}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)


    let addNewMessage = (values:any) => {
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


export const AddMessageForm = (props:any) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    // @ts-ignore
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
