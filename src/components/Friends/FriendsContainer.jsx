import React from "react";
import Preloader from "../common/preloader/preloader";
import {
    getCurrentFriendsPage,
    getFollowingInProgress, getFriends, getFriendsPageSize,
    getIsFetching,
    getTotalFriendsCount
} from "../../Redux/usersSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {follow, requestFriends, toggleFollowingProgress, unfollow} from "../../Redux/users-reducer";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        let {currentFriendsPage, friendsPageSize, friend} = this.props;
        this.props.getFriends(currentFriendsPage, friendsPageSize, friend);
    }

    onFriendsPageChanged = (currentFriendsPage) => {
        let {friendsPageSize} = this.props;
        this.props.getFriends(currentFriendsPage, friendsPageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends
                totalFriendsCount={this.props.totalFriendsCount}
                friendsPageSize={this.props.friendsPageSize}
                currentFriendsPage={this.props.currentFriendsPage}
                onFriendsPageChanged={this.onFriendsPageChanged}
                friends={this.props.friends}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        friendsPageSize: getFriendsPageSize(state),
        currentFriendsPage: getCurrentFriendsPage(state),
        totalFriendsCount: getTotalFriendsCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, toggleFollowingProgress, getFriends: requestFriends
    }),
)(FriendsContainer);