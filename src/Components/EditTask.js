import React, { Component } from "react";
import todoService from "../lib/todo-service";

class EditTask extends Component {
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

    const { id } = this.props.match.params;
    todoService.updateTodo(id).then(() => {
      this.props.history.push(`/todos/${id}`);
    });
  };

  render() {
    return (
      <div>
        <form className="edit-form" onSubmit={this.handleFormSubmit}>
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

export default EditTask;
