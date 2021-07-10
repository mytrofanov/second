import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.errorMessage
            }
    }
}
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const setAuthError = (errorMessage) =>
        ({type: SET_AUTH_ERROR, errorMessage})

export const getAuthUserData = () => (dispatch) => {
    return  authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });

}

export const loginReducer = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
           const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "ошибка авторизации";
           console.log(errorMessage)
           dispatch(setAuthError(errorMessage))

        }
    });
}
export const logoutReducer = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer;

