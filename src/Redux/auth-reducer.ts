import {authAPI, ResultCodeType, ResultCodeTypeWithCaptcha, securityAPI} from "../API/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState: { isAuth: boolean;
    authError: string | false | null;
    login: null | string;
    userId: number | null;
    email: string | null;
    captureURL: string | null };
initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authError: null,
    captureURL: null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: AuthActionType): initialStateType => {
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
    errorMessage: string | null | false
}
type setCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL,
    payload: { captureURL: string }
}
type AuthActionType = SetAuthUserDataActionType | setAuthErrorType | setCaptchaURLType

export const setAuthUserData = (userId: number | null, email: string | null,
                                login: string | null, isAuth: boolean): SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const setAuthError = (errorMessage: string | null | false): setAuthErrorType =>
    ({type: SET_AUTH_ERROR, errorMessage})

export const setCaptchaURL = (captureURL: string): setCaptchaURLType =>
    ({type: SET_CAPTCHA_URL, payload: {captureURL}})

export const getAuthUserData = () => async (dispatch: DispatchType) => {
    let response = await authAPI.me();
    if (response.resultCode === ResultCodeType.success) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

type DispatchType = Dispatch<AuthActionType>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, AuthActionType>

export const loginReducer = (email: string, password: string,
                             rememberMe: boolean, captcha: string): ThunkActionType =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        const errorMessage = response.messages.length > 0 && response.messages[0];

        if (response.resultCode === ResultCodeType.success) {
            dispatch(getAuthUserData())
            dispatch(setAuthError(''))
            dispatch(setCaptchaURL(''));
        }
        if (response.resultCode === ResultCodeTypeWithCaptcha.captchaRequired) {
            dispatch(getCaptureUrl())
            dispatch(setAuthError(errorMessage))
        } else {
            dispatch(setAuthError(errorMessage))
        }
    }

export const logoutReducer = () => async (dispatch:DispatchType) => {
    let response = await authAPI.logout();

    if (response.resultCode === ResultCodeType.success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptureUrl = () => async (dispatch: DispatchType) => {
    const response = await securityAPI.getCaptureUrl();
    const captureURL = response.data.url;
    dispatch(setCaptchaURL(captureURL));


}

export default authReducer;

