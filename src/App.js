import React, { Component } from 'react';
import './App.scss';

// import components
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>TO DO LIST</h1>
        <button>Add task</button>
        <AddTask />
        <TasksList />
      </main>
    );
  }
}

export default App;
