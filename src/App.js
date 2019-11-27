import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowToDo from "./components/showToDo"

class App extends Component {
  render() {
    return (
      <div>
        <h1> To do list </h1>
        <ShowToDo />
      </div>
    );
  }
}

export default App;
