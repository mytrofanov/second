import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {

        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                  <span className={s.about} onDoubleClick={this.activateEditMode}>Статус:    {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input className={s.about} value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;