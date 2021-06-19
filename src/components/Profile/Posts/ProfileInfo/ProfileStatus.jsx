import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                  <span className={s.about} onDoubleClick={this.activateEditMode}>Статус:
                      {this.props.status || "No status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} className={s.about} value={this.state.status} autoFocus={true}
                           onBlur={this.deactivateEditMode}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;