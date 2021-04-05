const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },

        messagesPage: {
            dialogs: [
                {id: 1, name: 'Sasha', ava: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
                {id: 2, name: 'Kolya', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Petya', ava: 'https://www.meme-arsenal.com/memes/cbfd4797382778baf1f41b8439399262.jpg'},
                {
                    id: 4,
                    name: 'Vasya',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIZ65bUZfqwc204EF5GN3tpbfY5zQ2WiB1A&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Nino',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMxEyi1yeivrdaCitJxEftqshPFPEouuz2A&usqp=CAU'
                },
                {
                    id: 6,
                    name: 'Dina',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8SCQKFAMJ8BW_2FXCdUyTXm66A4eksY2iA&usqp=CAU'
                },
                {
                    id: 7,
                    name: 'Pablo',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNPFMEDOAjlZxz1E1bSrNI-PlOq2m1tRh0g&usqp=CAU'
                }
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you doing?'},
                {id: 3, message: 'Whats up?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                count: 0, discount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else  if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else  if (action.type === 'SEND_MESSAGE') {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }

    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;

window.store = store;