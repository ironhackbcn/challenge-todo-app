import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateToDo from "./pages/CreateToDo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/todos" component={CreateToDo} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
