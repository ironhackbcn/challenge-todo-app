import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import Todos from "./views/Todos";
import Task from "./views/Task";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todos/:id" component={Task} />
        </Router>
      </div>
    );
  }
}

export default App;
