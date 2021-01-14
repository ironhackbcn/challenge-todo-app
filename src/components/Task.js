import React, { Component } from "react";
import axios from "axios";

class Task extends Component {
  state = {
    title: undefined,
    body: undefined,
  };

  deleteHandler = () => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${this.props.task._id}`)
      .then((response) => {
        this.props.getTasks();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h4>{this.props.task.title}</h4>
        <p>{this.props.task.body}</p>
        <button onClick={this.deleteHandler}>Delete</button>
      </div>
    );
  }
}

export default Task;
