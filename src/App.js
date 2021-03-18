import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//PAGES
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import AllTodos from "./Pages/AllTodos/AllTodos";
import OneTodo from "./Pages/OneTodo/OneTodo";
import NewTodo from "./Pages/NewTodo/NewTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/all" component={AllTodos} />
          <Route exact path="/todos/new" component={NewTodo} />
          <Route exact path="/todos/:id" component={OneTodo} />
        </Switch>
      </div>
    );
  }
}

export default App;
