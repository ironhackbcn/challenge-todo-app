import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// IMPORT REDUX
import { createStore } from "redux";
import { Provider } from 'react-redux';

// IMPORT THE REDUCER
import todosReducer from './redux/reducers/todosReducer';

// PASS THE REDUCER TO THE STORE & ENABLE REDUX DEV TOOLS
const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// PROVIDE STORE TO THE APP
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
