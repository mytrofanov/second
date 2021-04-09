const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 10,
                message: state.newPostText,
                count: 0, discount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;