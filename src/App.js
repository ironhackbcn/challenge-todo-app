import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../src/components/Form';
import TodoList from '../src/components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
