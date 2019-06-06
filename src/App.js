import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTodos from './components/ListTodos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListTodos/>
      </div>
    );
  }
}

export default App;
