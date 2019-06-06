import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bulma/css/bulma.css';
import 'bulma-helpers/css/bulma-helpers.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import gitCard from './store/reducer';

let store = createStore(gitCard);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
