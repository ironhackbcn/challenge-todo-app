import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TodoDetails from "./components/TodoDetails";
import CreateTodos from './CreateTodos'

import AllTodos from "./AllTodos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllTodos} />
          <Route exact path="/createTodos" component={CreateTodos} />
          <Route exact path="/todos/:id" component={TodoDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;