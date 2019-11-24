import React, { Component } from "react";
import todoService from "../service/todoService";

class CreateTodo extends Component {
  state = {
    title: "",
    body: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { title, body } = this.state;
    const { addNewtodo } = this.props;
    try {
      const data = await todoService.createTodo(title, body);
      const { data: todo } = data;
      this.setState({ title: "", body: "" });
      addNewtodo(todo);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <div>
          <h2>Create a new todo</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title of todo"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="body">Body: </label>
              <input
                type="textarea"
                name="body"
                value={body}
                placeholder="What do you need todo?"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <input type="submit" value="create" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTodo;
