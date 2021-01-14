import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetails from "./pages/TodoDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todos/:id" component={TodoDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
