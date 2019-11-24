import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import TodoDetail from "./Components/TodoDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>TODO LIST</h1>
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={TodoDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
