import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from './Redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderEntireTree() {
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App
    state={store.getState()}
    dispatch={store.dispatch.bind(store)}
    store={store}
    />
  </React.StrictMode>
  </BrowserRouter>
);
}
renderEntireTree()

store.subscribe(renderEntireTree)