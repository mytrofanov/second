import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutReducer} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsType = {
    logoutReducer: ()=>void
}
type HeaderContainerTypeProps = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerTypeProps> {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {logoutReducer})(HeaderContainer);