import React, { Component } from "react";
import axios from "axios";

class EditTask extends Component {
  state = {
    title: this.props.theTask.title,
    body: this.props.theTask.body,
  };

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const body = this.state.body;

    event.preventDefault();
    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.theTask._id}`, {
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

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeBody = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <label>Body:</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={(event) => this.handleChangeBody(event)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditTask;
