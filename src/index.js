import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, post: 'First post', count: 5, discount: 0},
    {id: 2, post: 'Second post', count: 7, discount: 1},
    {id: 3, post: 'Third post', count: 8, discount: 10},
    {id: 4, post: 'Forth post', count: 9, discount: 4},
    {id: 5, post: 'Fifth post', count: 10, discount: 2},
    {id: 6, post: 'Six post', count: 11, discount: 3},
    {id: 7, post: 'Seven post', count: 14, discount: 4},
]
let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Nino'},
    {id: 6, name: 'Dina'},
    {id: 7, name: 'Pablo'}
]
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Whats up?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

ReactDOM.render(
  <React.StrictMode>
      <App postData={postData}  messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
