import React, { Component } from "react";
import todoService from "../../Services/todo-service";
import "./NewTodo.css";

class NewTodo extends Component {
  state = {
    title: "",
    body: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    todoService
      .createTodo({ title, body })
      .then((data) => {
        console.log(data);

        this.setState({ title: "", body: "" });
        this.props.history.push("/todos/all");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="new-todo">
        <h2>Add a new Todo</h2>
        <form className="new-todo-form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <label>Content</label>
          <input
            style={{ height: "90px" }}
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
