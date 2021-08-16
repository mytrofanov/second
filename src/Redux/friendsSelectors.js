export const getFriends = (state) => {
    return state.sidebar.friends;
}
export const getFriendsPageSize = (state) => {
    return state.sidebar.friendsPageSize;
}
export const getCurrentFriendsPage = (state) => {
    return state.sidebar.currentFriendsPage;
}

export const getTotalFriendsCount = (state) => {
    return state.sidebar.totalFriendsCount;
}

