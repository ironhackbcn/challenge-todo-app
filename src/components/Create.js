import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Create extends Component {
  state = {
    title: "",
    body: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      title,
      body,
    } = this.state;

    axios
      .post(
        `http://localhost:4000/api/v1/todos`,
        {
          title,
          body,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          title: "",
          body: "",
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <form>
          <br />
          <br />
          <input
            type="text"
            placeholder="todo title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="textarea"
            name="body"
            placeholder="todo body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <div>
            <br />
            <button onClick={this.handleFormSubmit}>SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}
