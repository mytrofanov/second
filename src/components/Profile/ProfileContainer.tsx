import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfileForm, setEditMode, updateStatus
} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {ProfileType} from "../../types/Types";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type ProfileDispatchPropsType = {
    getUserProfile:(userId:number | null)=>void
    getStatus:(userId:number | null)=>void
    updateStatus: (id:number)=>void
    savePhoto: (file: File)=>void
    saveProfileForm: (profile:ProfileType)=>void
    setEditMode: (editMode:boolean)=>void
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStateToPropsType & ProfileDispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
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

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if ( this.props.match.params.userId !==  prevProps.match.params.userId)
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



let mapStateToProps = (state: AppStateType) => {
    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    editMode:state.profilePage.editMode
})};


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile, getStatus,
        updateStatus, savePhoto, saveProfileForm, setEditMode
    }),
    withRouter
)(ProfileContainer);
