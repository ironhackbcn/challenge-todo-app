import React, { Component } from "react";
import axios from "axios";

export default class AddTask extends Component {
  state = {
    input: "",
    // todoList: []
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.input;

    axios
      .post("http://localhost:4000/api/v1/todos", {
        title
      })
      .then(response => {
        console.log(response);
        this.props.getTodoList();
        // this.setState({TodoList: response.data})
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            type="text"
            name="task"
            value={this.state.input}
            placeholder="Add a task..."
            className="task-input"
          ></input>
          <button className="task-btn">Add Task</button>
        </form>
      </div>
    );
  }
}
