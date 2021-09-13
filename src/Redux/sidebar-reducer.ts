import {usersAPI} from "../API/api";
import {toggleIsFetching} from "./users-reducer";
import {PhotosType} from "../types/Types";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_FRIENDS_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';

type FriendsType = {
    id: number
    name: string
    status: string
    photos: PhotosType | null
    followed: boolean
    uniqueUrlName: null | string
}

let initialState = {
    friends: [] as Array<FriendsType>,
    friendsPageSize: 3,
    totalFriendsCount: 0,
    currentFriendsPage: 1
};

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {...state, friends: action.newFriends} as InitialStateType
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
}

type SetFriendsType = {
    type: typeof SET_FRIENDS
    newFriends: Array<FriendsType>
}
export const setFriends = (newFriends: Array<FriendsType>): SetFriendsType =>
    ({type: SET_FRIENDS, newFriends})

type SetCurrentFriendsPageType = {
    type: typeof SET_CURRENT_FRIENDS_PAGE
    currentFriendsPage: number
}
export const setCurrentFriendsPage = (currentFriendsPage: number): SetCurrentFriendsPageType =>
    ({type: SET_CURRENT_FRIENDS_PAGE, currentFriendsPage})


type SetTotalFriendsCountType = {
    type: typeof SET_TOTAL_FRIENDS_COUNT
    totalFriendsCount: number
}
export const setTotalFriendsCount = (totalFriendsCount: number): SetTotalFriendsCountType => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalFriendsCount
})

export const requestFriends = (currentFriendsPage: number, friendsPageSize: number, friend: boolean) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentFriendsPage(currentFriendsPage))

        let data = await usersAPI.getFriends(currentFriendsPage, friendsPageSize, friend);
        let newFriends = data.data.items;
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(newFriends));
        dispatch(setTotalFriendsCount(data.data.totalCount));
        dispatch(setCurrentFriendsPage(currentFriendsPage));
    }
}

export default sidebarReducer;