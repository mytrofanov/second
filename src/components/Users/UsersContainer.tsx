import React from "react";
import {connect, DefaultRootState} from "react-redux";
import {
    follow,
    unfollow, toggleFollowingProgress, requestUsers,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getUsers,
    totalUsersCount
} from "../../Redux/usersSelectors";
import {UsersType} from "../../types/Types";
import {AppStateType} from "../../Redux/redux-store";


type mapStateToPropsType =  {
    currentPage: number
    pageSize:number
    users: Array<UsersType>
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    getUsers: (currentPage:number, pageSize:number)=> Array<UsersType>
    follow: (userId:number)=>void
    unfollow: (userId:number)=>void
    }
type OwnPropsType = {
    pageTitle: string
}
type PropsType = mapStateToPropsType &  MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage,pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber:number) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />

        </>
    }

}


let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: totalUsersCount(state),
        isFetching: getIsFetching (state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<mapStateToPropsType, AppStateType, MapDispatchToPropsType>(mapStateToProps, {
        follow, unfollow, toggleFollowingProgress, getUsers: requestUsers
    }),
)(UsersContainer);
