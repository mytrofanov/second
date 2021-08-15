export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getFriends = (state) => {
    return state.usersPage.friends;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getFriendsPageSize = (state) => {
    return state.usersPage.friendsPageSize;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getCurrentFriendsPage = (state) => {
    return state.usersPage.currentFriendsPage;
}
export const totalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getTotalFriendsCount = (state) => {
    return state.usersPage.totalFriendsCount;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}


export class getfriendsPageSize {
}