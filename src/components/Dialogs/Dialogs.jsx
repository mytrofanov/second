import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog + ' ' + s.active} >
                    Kolya
                </div>
                <div className={s.dialog}>
                    Petya
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
                <div className={s.dialog}>
                    Nino
                </div>
                <div className={s.dialog}>
                    Pablo
                </div>
            </div>
            {/*закрываются диалоги*/}

            {/*начало сообщений*/}
            <div className={s.messages}>
            <div className={s.message} >Hi</div>
            <div className={s.message}>How are you doing?</div>
            <div className={s.message}>Whats up?</div>
            </div> {/*конец блока сообщений*/}
        </div>

    )
}

export default Dialogs;