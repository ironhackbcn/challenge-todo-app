import React, { Component } from "react";
import "./App.css";
import AddNewTodo from "./pages/AddNewTodo";
import TodosList from "./pages/TodosList";
import TodoDetails from "./pages/TodoDetails";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AddNewTodo} />
            <Route exact path="/todos" component={TodosList} />
            <Route exact path="/todos/:id" component={TodoDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
