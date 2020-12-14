import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AllTasks from './components/AllTasks';
import AddTask from './components/AddTask';
import { Switch } from "react-router-dom";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Routes exact path="/allTasks" component={AllTasks} />
          <Routes exact path="/addTask" component={AddTask} />
        </Switch>
      </div>
    );
  }
}

export default App;
