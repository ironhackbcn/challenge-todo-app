import React, { Component } from "react";
import axios from "axios";
import "./NewTaskPage.css"

class NewTask extends Component {
  state = {
    title: "",
    body: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;

    axios
      .post("http://localhost:4000/api/v1/todos", {
        title,
        body,
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (updatedInfo) => {
    const { name, value } = updatedInfo.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="task-form">
        <label className="label-form">Title:</label>
        <input
          type="text"
          name="title"
          className="input-form"
          value={this.state.title}
          onChange={(updatedInfo) => this.handleChange(updatedInfo)}
        />
        <br />

        <label className="label-form">Body:</label>
        <input
          type="text"
          name="body"
          className="input-form"
          value={this.state.body}
          onChange={(updatedInfo) => this.handleChange(updatedInfo)}
        />
        <br />
        <input type="submit" value="ADD NOW" className="task-form-button"/>
      </form>
    );
  }
}

export default NewTask;
