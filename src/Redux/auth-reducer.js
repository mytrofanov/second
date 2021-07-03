import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true

            }


            default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email}  = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const loginReducer = (email, password, rememberMe) => (dispatch) => {
       authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())}
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