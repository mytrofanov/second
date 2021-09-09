import {authAPI, securityAPI} from "../API/api";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string,
    isAuth: false,
    authError: null as string | number | null,
    captureURL: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
    }
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
type  setAuthErrorType = {
    type: typeof SET_AUTH_ERROR,
    errorMessage: string|null
}
type setCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL,
    payload: {captureURL: string}
}

export const setAuthUserData = (userId: number | null, email: string | null,
                                login: string | null, isAuth: boolean): SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const setAuthError = (errorMessage:string|null):setAuthErrorType =>
    ({type: SET_AUTH_ERROR, errorMessage})

export const setCaptchaURL = (captureURL:string):setCaptchaURLType =>
    ({type: SET_CAPTCHA_URL, payload: {captureURL}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginReducer = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    const errorMessage = response.data.messages.length > 0 && response.data.messages[0];

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setAuthError(''))
        dispatch(setCaptchaURL(''));
    }
    if (response.data.resultCode === 10) {
        dispatch(getCaptureUrl())
        dispatch(setAuthError(errorMessage))
    } else {
        dispatch(setAuthError(errorMessage))
    }
}

export const logoutReducer = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptureUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptureUrl();
    const captureURL = response.data.url;
    dispatch(setCaptchaURL(captureURL));


}

export default authReducer;

