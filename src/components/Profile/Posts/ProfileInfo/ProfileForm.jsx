import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import {Button, Checkbox, TextField} from "@material-ui/core";
import {Stack} from "@mui/material";


export const ProfileForm = ({profile, onSubmit, callEditMode}) => {
// на поле ищу работу - нужно вставить значение по умолчанию

    return <div>
        <ProfileDataForm profile={profile} onSubmit={onSubmit} callEditMode={callEditMode}/>
    </div>
}

export const ProfileDataForm = ({onSubmit, profile, callEditMode}) => {

    const inputCreator = (divName, inputName, placeholder) => {
        return <div className = {s.ContactInputForm}>
            <TextField
            fullWidth
            label= {divName}
            id="outlined-size-small"
            variant="outlined"
            defaultValue={placeholder}
            size="small"
            {...register(inputName)}
        />

        </div>
    }

    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const profileError = profile.error;

     return (
        <div >
            <form className={s.ProfileFormBlock} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div className={s.FormInputDiv}> <TextField
                        label="Имя"
                        id="outlined-size-small"
                        variant="outlined"
                        defaultValue={profile.fullName}
                        size="small"
                        {...register("fullName")} placeholder={profile.fullName}
                    />
                         </div>
                    <div className={s.FormInputDiv}>
                        <TextField
                            label="Обо мне"
                            id="outlined-size-small"
                            defaultValue={profile.aboutMe}
                            size="small"
                            variant="outlined"
                            {...register("aboutMe")} placeholder={profile.aboutMe}
                        />
                       </div>
                    <div>Ищу работу:   <Checkbox {...label} defaultChecked {...register("lookingForAJob")}/>

                        {/*<input {...register("lookingForAJob")} type="checkbox"/>*/}

                    </div>
                    <div className={s.FormInputDiv}>
                        <TextField
                            fullWidth
                            label="Мои навыки"
                            id="outlined-size-small"
                            defaultValue={profile.lookingForAJobDescription}
                            size="small"
                            sx={{width:"300px"}}
                            variant="outlined"
                            {...register("lookingForAJobDescription")}
                        />

                     </div>
                    <b >Контакты:</b>

                    {Object.keys(profile.contacts).map(key => {
                        return < div key={key}>
                            {inputCreator(key, "contacts." + key, profile.contacts[key])}
                        < /div>
                    })
                    }
                </div>
                <div className={s.ButtonsOnProfileEditForm}></div>
                <Stack spacing={2} direction="row">
                <Button variant="contained" type="submit" color="warning">Save</Button>
                <Button variant="contained"  onClick={callEditMode} color="success">Вернуться без изменений</Button>
                </Stack>

                <div className={s.profileError}>
                    {profileError && profileError}
                </div>


            </form>

        </div>
    )
}