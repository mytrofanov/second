import React, {useState} from "react";
import s from "./ProfileInfo.module.css";

export const ProfileForm =({goToEditMode})=> {


    return <div>
        editMode
        <div>
        <button className={s.editProfile} onClick={goToEditMode}>Save</button>
        </div>
    </div>
}
