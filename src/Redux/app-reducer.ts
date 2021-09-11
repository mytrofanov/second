import {getAuthUserData} from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED';


export type  initialStateType = {
    initialized: boolean,
};

let initialState: initialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
type initializedSuccessType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): initializedSuccessType =>
    ({type: SET_INITIALIZED})


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    });
}

export default appReducer;

