import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    this.handleTodo();
  }

  handleTodo() {
    const todoId = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/api/v1/todos/${todoId}`)
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          title: apiResponse.data.title,
          body: apiResponse.data.body,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const todoId = this.props.match.params.id;
    const title = this.state.title;
    const body = this.state.body;

    axios
      .put(`http://localhost:4000/api/v1/todos/${todoId}`, { title, body })
      .then((apiResponse) => {
        console.log(apiResponse);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="edit-todo">
        <h1>Edit your Todo List</h1>
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <input
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}
export default EditTodo;
