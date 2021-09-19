import {profileAPI, usersAPI} from "../API/api";
import {PhotosType, PostsType, ProfileType} from "../types/Types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR';
const SET_EDIT_MODE = 'SET_EDIT_MODE';


let initialState = {
    posts: [
        {id: 1, message: 'First post', count: 5, discount: 0},
        {id: 2, message: 'Second post', count: 7, discount: 1},
        {id: 3, message: 'Third post', count: 8, discount: 10},
        {id: 4, message: 'Forth post', count: 9, discount: 4},
        {id: 5, message: 'Fifth post', count: 10, discount: 2},
        {id: 6, message: 'Six post', count: 11, discount: 3},
        {id: 7, message: 'Seven post', count: 14, discount: 4},
        {id: 8, message: 'Eight post', count: 15, discount: 2},
        {id: 9, message: 'Nine post', count: 7, discount: 2}
    ] as Array <PostsType>,
    profile: null as ProfileType | null,
    editMode: false,
    status: "" as string,
    error: "" as string
};
type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action:ProfileActionType):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: action.newPost,
                count: 0, discount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }
        case SET_PROFILE_ERROR: {
            return {
                ...state,
                profile: {...state.profile, error: action.error} as ProfileType
            };
        }
        case SET_EDIT_MODE: {
            return {
                ...state,
                editMode: action.editMode
            };
        }
        default:
            return state;
    }

}
//Типизация Action
type ProfileActionType = AddPostActionCreatorType | DeletePostType | SetUserProfileType | SetStatusType |
    savePhotoSuccessType | saveProfileErrorType | setEditModeType
// типизация Санок
type DispatchType = Dispatch<ProfileActionType>
type ThunkActionType  = ThunkAction<Promise<void>, AppStateType, any , ProfileActionType>;


type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPostActionCreator = (newPost:string):AddPostActionCreatorType => ({type: ADD_POST, newPost})

type DeletePostType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id:number):DeletePostType => ({type: DELETE_POST, id})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string):SetStatusType => ({type: SET_STATUS, status})

type savePhotoSuccessType = {
    type: typeof SET_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):savePhotoSuccessType => ({type: SET_PHOTO, photos})

type saveProfileErrorType = {
    type: typeof SET_PROFILE_ERROR
    error: string
}
export const saveProfileError = (error:string):saveProfileErrorType => ({type: SET_PROFILE_ERROR, error})

type setEditModeType = {
    type: typeof SET_EDIT_MODE
    editMode: boolean
}
export const setEditMode = (editMode:boolean):setEditModeType => ({type: SET_EDIT_MODE, editMode})

export const getUserProfile = (userId: number | null):ThunkActionType => async (dispatch:DispatchType) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId:number | null) => async (dispatch:DispatchType) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status:string) => async (dispatch:DispatchType) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const saveProfileForm = (profile:ProfileType):ThunkActionType =>
    async (dispatch, getState) => {
    let userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if (response.status === 500) {
        dispatch(saveProfileError("Ошибка сервера.Статус: " + response.status + "  Сообщение сервера:  " +
            response.data.message))
    }
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(setEditMode(false));
    }
    if (response.data.resultCode === 1) {
        dispatch(saveProfileError(response.data.messages))
    }


}


export const savePhoto = (file: File) => async (dispatch:DispatchType) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        let photos = response.data.data.photos;
        dispatch(savePhotoSuccess(photos));
    }
}


export default profileReducer;