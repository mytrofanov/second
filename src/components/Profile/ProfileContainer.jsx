import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfileForm, setEditMode, updateStatus
} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.match.params.userId !=  prevProps.match.params.userId)
        {
            this.refreshProfile();
        }//если юзер меняется то обновляем компоненту profile
    }


    render() {

        return (

            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfileForm={this.props.saveProfileForm}
                     setEditMode={this.props.setEditMode}
                     editMode={this.props.editMode}
            />
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    editMode:state.profilePage.editMode

});


export default compose(
    connect(mapStateToProps, {
        getUserProfile, getStatus,
        updateStatus, savePhoto, saveProfileForm, setEditMode
    }),
    withRouter
)(ProfileContainer);
