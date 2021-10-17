import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import {TextField} from "@mui/material";

type ProfileStatusWithHookPropsType = {
    status: string | null
    updateStatus: (status:string | null)=>void
    isOwner: boolean
}

const ProfileStatusWithHooks:React.FC<ProfileStatusWithHookPropsType> =
    (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditModeForStatus = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }
    const deactivateEditModeForStatus = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (ev:any) => {
        setStatus(ev.currentTarget.value)
    }
    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={s.status}>
            {!editMode &&
            <div>
                  <span className={s.aboutStatus}  onDoubleClick={activateEditModeForStatus} data-title="Double click for editing. Your account only">Статус: &nbsp;
                      {props.status||"-------"}  </span>
            </div>
            }
            {editMode &&
            <div>
                <TextField
                    sx={{width:"300px"} }
                    label="Status"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={status!}
                    autoFocus={true} onChange={onStatusChange}
                    onBlur={deactivateEditModeForStatus}/>

                 </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;
