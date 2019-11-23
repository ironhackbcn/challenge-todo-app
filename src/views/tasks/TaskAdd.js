import React, { Component } from 'react';
import taskService from "../../services/taskService";

class TaskAdd extends Component {
  state = {
    task: {}
  };

  handleChange = event => {
    console.log(this.state)
    this.setState(
      { [event.target.name]: event.target.value }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;
    const { history: { push } } = this.props;
    taskService
      .addTask(task)
      .then(() => { push(`/`) })
      .catch(() => { })
  };

  render() {
    const { task: { title, body } } = this.state;
    return (
      <>
        <h1>You know you have loads of task - feel free to add them here:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="details"
            value={body}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Task" />
        </form>
      </>
    );
  }
}

export default TaskAdd;