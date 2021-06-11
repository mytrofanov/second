import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUserCount,
    toggleIsFetching,
    unfollow, toggleFollowingProgress, getUsers, setTotalUsersCount
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {usersAPI} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);

        });
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers
})(UsersContainer);

//max исправил крутилку