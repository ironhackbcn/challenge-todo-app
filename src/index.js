import React from "react";
import ReactDOM from "react-dom";

// * Importing Redux
// Provider: Keep track of the store and global state, allowing us to access to that store anywhere inside the app.
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import "./index.css";

// * Setting redux
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
