import React, { Component } from "react";
import service from "./../lib/service.js";

class AddToDoForm extends Component {
  state = {};

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    await service.addNewToDo(title, body);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="body"
            id="body"
            onChange={this.handleChange}
          />

          <input type="submit" value="Add To Do" />
        </form>
      </div>
    );
  }
}

export default AddToDoForm;
