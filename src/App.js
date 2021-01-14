import React, { Component } from "react";
import Todo from "./pages/Todo";
import EditTodo from "./pages/EditTodo";

import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/edit/:id" component={EditTodo} />
      </Switch>
    );
  }
}

export default App;
