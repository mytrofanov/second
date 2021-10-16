import {usersAPI} from "../API/api";
import {toggleIsFetching, toggleIsFetchingType} from "./users-reducer";
import {FriendsType} from "../types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_FRIENDS_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';



let initialState = {
    friends: [] as Array<FriendsType>,
    friendsPageSize: 12,
    totalFriendsCount: 0,
    currentFriendsPage: 1
};

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: SideBarActionType): InitialStateType => {
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

type SideBarActionType = SetFriendsType | SetCurrentFriendsPageType |
    SetTotalFriendsCountType | toggleIsFetchingType

//toggleIsFetchingType импортируем из userReducer

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


type ThunkActionType  = ThunkAction<Promise<void>, AppStateType, any , SideBarActionType>;

export const requestFriends = (currentFriendsPage: number,
                               friendsPageSize: number, followed: boolean):ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentFriendsPage(currentFriendsPage))

        let data = await usersAPI.getFriends(currentFriendsPage, friendsPageSize, followed);
        let newFriends = data.data.items;
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(newFriends));
        dispatch(setTotalFriendsCount(data.data.totalCount));
        dispatch(setCurrentFriendsPage(currentFriendsPage));
    }
}

export default sidebarReducer;