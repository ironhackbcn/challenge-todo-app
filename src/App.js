import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoCard from "./components/TodoCard/TodoCard";

class App extends Component {
  state = {
    todoList: [],
    showForm: false,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  renderTodos = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((response) => {
        this.setState({ todoList: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.renderTodos();
  };

  render() {
    return (
      <div className="App">
        <h1>My Todos</h1>
        <button onClick={this.toggleForm} id="toggle-button">
          Create a new Task
        </button>
        {this.state.showForm ? (
          <CreateTodo renderTodos={this.renderTodos} />
        ) : null}

        <div id="todo-list">
          {this.state.todoList
            .map((todo, index) => {
              return (
                <div key={index}>
                  <TodoCard todo={todo} renderTodos={this.renderTodos} />
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    );
  }
}

export default App;
