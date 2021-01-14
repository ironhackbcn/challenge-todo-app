import React from "react";
import axios from "axios";

import TodoList from "./../components/TodoList";

class Todo extends React.Component {
  state = {
    title: "",
    body: "",
    newTodoItems: [],
    showForm: false,
  };

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;
    const body = this.state.body;

    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then((apiResponse) => {
        console.log(apiResponse);
        const todoList = this.state.newTodoItems;
        todoList.push(apiResponse.data);
        this.setState({ newTodoItems: todoList, title: "", body: "" });
      })
      .catch((error) => console.log(error));
  };

  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const showForm = this.state.showForm;

    return (
      <div className="todo">
        <h1>Welcome to todo app!</h1>
        <button className="btn" onClick={this.handleShowForm}>
          Add New Task
        </button>
        {showForm ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput}
              placeholder="Title"
            />
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleInput}
              placeholder="Body"
            />
            <button type="submit">Add New Todo</button>
          </form>
        ) : null}

        <TodoList newTodoItems={this.state.newTodoItems} />
      </div>
    );
  }
}

export default Todo;
