import {profileAPI, usersAPI} from "../API/api";

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
    ],
    profile: null,
    editMode: false,
    status: ""


};

const profileReducer = (state = initialState, action) => {
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
                posts: state.posts.filter(p => p.id != action.id)
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
                profile: {...state.profile, photos: action.photos}
            };
        }
        case SET_PROFILE_ERROR: {
            return {
                ...state,
                profile: {...state.profile, error: action.error}
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

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO, photos})
export const saveProfileError = (error) => ({type: SET_PROFILE_ERROR, error})
export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const saveProfileForm = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if (response.status == 500) {
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


export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        let photos = response.data.data.photos;
        dispatch(savePhotoSuccess(photos));
    }
}


export default profileReducer;