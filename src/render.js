import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { addPost } from './Redux/state';
import { updateNewPostText } from './Redux/state';
import { sendMessage } from './Redux/state';
import { updateNewMessageText } from './Redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
export function renderEntireTree(state) {
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App state={state} 
    addPost={addPost} 
    updateNewPostText={updateNewPostText}
    sendMessage={sendMessage}
    updateNewMessageText={updateNewMessageText} />
  </React.StrictMode>
  </BrowserRouter>
);
}