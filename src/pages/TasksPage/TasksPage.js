import React, { Component } from "react";
import TaskList from "../../components/TaskList/TaskList";
import axios from "axios";
import "./TasksPage.css";

class TasksPage extends Component {
  state = {
    listOfTasks: [],
  };

  getAllTasks = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then((responseFromApi) => {
      this.setState({
        listOfTasks: responseFromApi.data,
      });
    });
  };

  updateTaskStatus = (id, isDone) => {
    console.log(id, isDone, "ID idDone");
  };

  componentDidMount() {
    this.getAllTasks();
  }

  render() {
    return (
      <div>
        <h1 className="home-title">What do I need to EAT?</h1>
        <TaskList
          eachTask={this.state.listOfTasks}
          updateTaskStatus={this.updateTaskStatus}
        />
      </div>
    );
  }
}

export default TasksPage;
