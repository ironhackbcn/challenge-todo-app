import React, { Component } from "react";
import Task from "../components/Task";
import axios from "axios";
import { Link } from "react-router-dom";

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

  componentDidMount() {
    this.getAllTasks();
  }

  render() {
    return (
      <div>
        {this.state.listOfTasks.map((eachTask, index) => {
          return (
            <Link key={eachTask._id} to={`/todos/${eachTask._id}`}>
              <Task eachTask={eachTask} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default TasksPage;
