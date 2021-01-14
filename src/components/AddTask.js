import React, { Component } from "react";
import axios from "axios";

class AddTask extends Component {
  state = {
    title: undefined,
    body: undefined,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then(() => {
        console.log("new task created");
        this.setState({ title: "", body: "" });
        this.props.getTasks();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Desription:</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="form-button" type="submit" value="Submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;
