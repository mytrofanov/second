import React from "react";
import {connect} from "react-redux";
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
import {UsersMapStateToPropsType, UsersMapDispatchToPropsType, UsersOwnPropsType} from "../../types/Types";
import {AppStateType} from "../../Redux/redux-store";



type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType & UsersOwnPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>

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


let mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: totalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<UsersMapStateToPropsType, UsersMapDispatchToPropsType, UsersOwnPropsType, AppStateType>(mapStateToProps,
        {
            follow, unfollow, getUsers: requestUsers
        }),
)(UsersContainer);
