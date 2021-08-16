import {usersAPI} from "../API/api";
import {toggleIsFetching} from "./users-reducer";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_FRIENDS_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';


let initialState = {
    friends: [],
    friendsPageSize:3,
    totalFriendsCount: 0,
    currentFriendsPage: 1
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {...state, friends: action.newFriends}
        }
        case SET_CURRENT_FRIENDS_PAGE: {
            return {...state, currentFriendsPage: action.currentFriendsPage}
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return {...state, totalFriendsCount: action.totalFriendsCount}
        }

        default:
            return state;
    }

    return state;
}

export const setFriends = (newFriends) => ({type: SET_FRIENDS, newFriends})
export const setCurrentFriendsPage = (currentFriendsPage) => ({type: SET_CURRENT_FRIENDS_PAGE, currentFriendsPage})
export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount})

export const requestFriends = (currentFriendsPage, friendsPageSize, friends) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentFriendsPage(currentFriendsPage))

        let data = await usersAPI.getFriends(currentFriendsPage, friendsPageSize, friends);
        let newFriends = data.data.items;
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(newFriends));
        dispatch(setTotalFriendsCount(data.data.totalCount));
        dispatch(setCurrentFriendsPage(currentFriendsPage));
    }
}

export default sidebarReducer;