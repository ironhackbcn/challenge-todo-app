import React, { Component } from "react";
import axios from "axios";

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
        // this.setState({
        //   title: "",
        //   body: "",
        // });
        this.props.history.push('/')
      })
      .catch((error) => console.log(error));
  };

  handleChange = (updatedInfo) => {
    const { name, value } = updatedInfo.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <label>Body:</label>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <input type="submit" value="ADD NOW" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewTask;
