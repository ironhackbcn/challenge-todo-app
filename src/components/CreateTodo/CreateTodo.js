import React from "react";
import axios from "axios";
import "./CreateTodo.css";

class CreateTodo extends React.Component {
  state = {
    title: "",
    body: "",
  };

  handleInput = (event) => {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, body } = this.state;

    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then(() => {
        console.log(title, body);
        this.setState({ title: "", body: "" });
        this.props.renderTodos();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="create-todo">
        <input
          name="title"
          type="text"
          value={this.state.title}
          placeholder="title"
          onChange={this.handleInput}
          required
        />

        <input
          name="body"
          type="text"
          value={this.state.body}
          placeholder="details"
          onChange={this.handleInput}
          required
        />
        <button>Create Todo</button>
      </form>
    );
  }
}

export default CreateTodo;
