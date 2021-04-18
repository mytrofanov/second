

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state
      //  messages: [...state.messages] - это можно не копировать,
        //  т.к. дальше передается вся страница dialogsPage: state.messagesPage
    };


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
        default: return state;
    }

    }


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})




export default dialogsReducer;