import React, { Component } from 'react';
import './App.css';
import AddTodo from "./pages/AddTodo";
import AllTodos from "./pages/AllTodos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <AllTodos />
      </div>
    );
  }
}

export default App;
