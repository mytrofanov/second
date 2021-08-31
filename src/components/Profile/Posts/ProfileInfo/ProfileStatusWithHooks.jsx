import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (ev) => {
        setStatus(ev.currentTarget.value)
    }
    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={s.status}>
            {!editMode &&
            <div>
                  <span className={s.about}  onDoubleClick={activateEditMode} data-title="Double click for editing. Your account only">Статус: &nbsp;
                      {props.status||"-------"}  </span>
            </div>
            }
            {editMode &&
            <div>
                <input className={s.about} value={status}
                       autoFocus={true} onChange={onStatusChange}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;
