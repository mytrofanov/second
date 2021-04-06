const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 10,
            message: state.newPostText,
            count: 0, discount: 0
        }
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;