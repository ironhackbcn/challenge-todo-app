import React, { Component } from "react";
import "./App.css";

import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import taskService from "./services/taskservice";

class App extends Component {
  state = {
    taskList: [],
  };

  componentDidMount() {
    this.loadTaskList();
  }

  loadTaskList = async () => {
    try {
      const taskArray = await taskService.getAllTasks();
      this.setState({ taskList: taskArray });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      await this.loadTaskList();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='App'>
        <NewTaskForm loadTaskList={this.loadTaskList} />
        <TaskList
          loadTaskList={this.loadTaskList}
          taskList={this.state.taskList}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
