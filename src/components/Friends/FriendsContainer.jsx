import React from "react";
import Preloader from "../common/preloader/preloader";
import {
    getCurrentFriendsPage,
    getFriends, getFriendsPageSize,
    getTotalFriendsCount
} from "../../Redux/friendsSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestFriends} from "../../Redux/sidebar-reducer";
import Sidebar from "../Sidebar/Sidebar";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
            <Sidebar
                totalFriendsCount={this.props.totalFriendsCount}
                friendsPageSize={this.props.friendsPageSize}
                currentFriendsPage={this.props.currentFriendsPage}
                onFriendsPageChanged={this.onFriendsPageChanged}
                friends={this.props.friends}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        totalFriendsCount: getTotalFriendsCount(state),
        friendsPageSize: getFriendsPageSize(state),
        currentFriendsPage: getCurrentFriendsPage(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getFriends: requestFriends
    }),withAuthRedirect
)(FriendsContainer);