import React, { Component } from "react";
import service from "./../lib/service.js";

class EditToDo extends Component {
  state = {
    toDo: {},
  };

  //   To call the To Do from the server
  getToDo = async () => {
    const id = this.props.match.params.id;
    const toDo = await service.getToDo(id);
    this.setState({
      toDo: toDo,
    });
  };

  //   To call the previous function everytime the component/page is mouunted
  componentDidMount = () => {
    this.getToDo();
  };

  // Functions to manage the data from the form or inputs 
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    const id = this.props.match.params.id;
    await service.editToDo(id, title, body);
    this.props.history.goBack()
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Edit To Do</h2>

        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={this.state.toDo.title}
            onChange={this.handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="body"
            id="body"
            placeholder={this.state.toDo.body}
            onChange={this.handleChange}
          />

          <input type="submit" value="Edit To Do" />
        </form>
      </div>
    );
  }
}

export default EditToDo;
