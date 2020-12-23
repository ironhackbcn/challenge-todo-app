import React, { Component } from "react";
import axios from "axios";

class EditTask extends Component {
  state = {
    currentTask:{}
  };

  getOneTask = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then((responseFromApi) => {
        this.setState({
          currentTask: responseFromApi.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getOneTask();
  }

  handleFormSubmit = (event) => {
    const title = this.state.currentTask.title;
    const body = this.state.currentTask.body;
    event.preventDefault();
    axios
      .put(`http://localhost:4000/api/v1/todos/${this.state.currentTask._id}`, {
        title,
        body,
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange(event, propertyName) {
    let copyTask = this.state.currentTask;
    copyTask[propertyName] = event.target.value;
    this.setState({
      currentTask: copyTask,
    });
  }

  render() {
    return (
      <div>
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit} className="task-form">
          <label className="label-form">Task:</label>
          <input
            type="text"
            className="input-form"
            name="title"
            value={this.state.currentTask.title}
            onChange={(event) => this.handleChange(event, "title")}
          />
          <br />
          <label className="label-form">Description:</label>
          <input
            type="text"
            name="body"
            className="input-form"
            value={this.state.currentTask.body}
            onChange={(event) => this.handleChange(event, "body")}
          />
          <br />
          <input type="submit" value="SAVE" className="task-form-button" />
        </form>
      </div>
    );
  }
}

export default EditTask;
