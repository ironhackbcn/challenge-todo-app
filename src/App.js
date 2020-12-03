import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskList from "./components/TaskList"; 
import GetTodo from "./components/GetTodo";
import Surprise from  "./components/Surprise";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TaskList}/>
          <Route exact path="/surprise" component={Surprise}/>
          <Route exact path="/todos/:id" component={GetTodo}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;