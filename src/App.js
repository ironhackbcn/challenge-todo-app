import React, { Component } from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

import todoService from './lib/todo-service';
import './App.css';

class App extends Component {

  state = {
    tasks: []
  }

  deleteTodo = (id) => {
    todoService.deleteTodo(id)
      .then(() => {
        todoService.getAllTodos()
          .then(response => this.setState({tasks: response.data}))
      })
  } 

  showAllTodos = () => {
    todoService.getAllTodos()
      .then(response => this.setState({tasks: response.data}))
  }

  componentDidMount() {
    this.showAllTodos();
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm showAllTodos={this.showAllTodos}/>
        <TodoList tasks={this.state.tasks} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
