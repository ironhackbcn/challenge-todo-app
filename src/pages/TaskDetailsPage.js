import React, { Component } from "react";
import axios from "axios";
import TaskDetail from "../components/TaskDetails";
import EditTask from "../components/EditTask";

class TaskDetailsPage extends Component {
  state = {
    aTask: {},
  };

  getATask = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then((responseFromApi) => {
        this.setState({
          aTask: responseFromApi.data,
        });
      });
  };

  renderEditForm = () => {
    if (!this.state.aTask.title) {
      return this.getATask();
    } else {
      return <EditTask theTask={this.state.aTask} {...this.props} />;
    }
  };

  deleteTask = () => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getATask();
  }

  render() {
    return (
      <div>
        <TaskDetail eachDetail={this.state.aTask} />
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteTask()}>Delete project</button>
      </div>
    );
  }
}

export default TaskDetailsPage;
