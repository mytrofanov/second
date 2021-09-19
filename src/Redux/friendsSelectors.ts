import {AppStateType} from "./redux-store";

export const getFriends = (state:AppStateType) => {
    return state.sidebar.friends;
}
export const getFriendsPageSize = (state:AppStateType) => {
    return state.sidebar.friendsPageSize;
}
export const getCurrentFriendsPage = (state:AppStateType) => {
    return state.sidebar.currentFriendsPage;
}

export const getTotalFriendsCount = (state:AppStateType) => {
    return state.sidebar.totalFriendsCount;
}

