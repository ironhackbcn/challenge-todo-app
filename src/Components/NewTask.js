import React, { Component } from "react";
import todoService from "../lib/todo-service";

class NewTask extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let todo = this.state;

    todoService.createTodo(todo).then(() => {
      console.log("TODOOOOOO", todo);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <form className="task-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={e => this.handleChange(e)}
          />
          <textarea
            name="body"
            value={this.state.body}
            placeholder="Task description"
            onChange={e => this.handleChange(e)}
          />
          <button className="submit-btn" type="submit" value="Submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default NewTask;
