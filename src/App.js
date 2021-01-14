import React, { Component } from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

import todoService from './lib/todo-service';
import './App.css';

class App extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    todoService.getAllTodos()
      .then(response => this.setState({tasks: response.data}))
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
