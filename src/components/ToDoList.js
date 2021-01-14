import React, { Component } from "react";
import data from "./../data";
import Task from "./Task";
import AddTask from "./AddTask";

class ToDoList extends Component {
  state = { tasks: data };

  deleteTaskById = (id) => {
    const taskListCopy = [...this.state.tasks];
    taskListCopy.forEach((taskObj, index) => {
      if (taskObj.id === id) {
        taskListCopy.splice(index, 1);
      }
    });
    this.setState({ tasks: taskListCopy });
  };

  addTask = (event) => {
    event.preventDefault();
    const { id, title, desc } = this.state;
    this.setState({ id: "", title: "", desc: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <AddTask addTask={this.addTask} handleChange={this.handleChange}/>

        <div>
          {this.state.tasks.map((task) => {
            return (
              <Task key={task.id} deleteTask={this.deleteTaskById} {...task} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
