import React, { Component } from "react";
import data from "./../data";


class AddTask extends Component {
  state = { tasks: data };

  

  render() {
    return (
      <div>
        <form onSubmit={this.props.addTask}>
          
        <label>Task id:</label>
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.props.handleChange}
          
          />

          
          <label>Task Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.props.handleChange}
          />

          <label>Description:</label>
          <input
          type="text"
            name="task description"
            value={this.state.desc}
            onChange={this.props.handleChange}
          />

          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default AddTask;
