import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Routes exact path="/" component={Navbar} />
          <Routes exact path="/addTask" component={AddTask} />
          {/* <Routes exact path="/allTasks" component={AllTasks} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
