import React, { Component } from 'react';
import TodoForm from './views/TodoForm';
import UserList from './views/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your own to-do list</h1>
          <TodoForm />
          {/* <UserList /> */}
        </header>
      </div>
    );
  }
}

export default App;
