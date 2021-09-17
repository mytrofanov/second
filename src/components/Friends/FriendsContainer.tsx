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
import {AppStateType} from "../../Redux/redux-store";
import {FriendsType} from "../../types/Types";

type FriendsContainerType = {
    currentFriendsPage: number
    friendsPageSize: number
    friend: boolean
    getFriends: (currentPage: number, pageSize: number, followed: boolean) => void
    isFetching: boolean
    friends: Array<FriendsType>
    totalFriendsCount: number
    followed: boolean
}


class FriendsContainer extends React.Component<FriendsContainerType> {

    refreshFriends() {
        let {currentFriendsPage, friendsPageSize, friend} = this.props;
        this.props.getFriends(currentFriendsPage, friendsPageSize, friend);
    }

    componentDidMount() {
        this.refreshFriends()
    }

    componentDidUpdate(prevProps: Readonly<FriendsContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.totalFriendsCount !== this.props.totalFriendsCount) {
            this.refreshFriends()
        }

    }

    onFriendsPageChanged = (currentFriendsPage: number) => {
        let {friendsPageSize, friend} = this.props;
        this.props.getFriends(currentFriendsPage, friendsPageSize, friend);
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

let mapStateToProps = (state: AppStateType) => {
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
    }), withAuthRedirect
)(FriendsContainer);