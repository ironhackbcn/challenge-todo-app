import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theTodo.title,
      body: this.props.theTodo.body
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const body = this.state.body;

    event.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.theTodo._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.getTheTodo();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description:</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={e => this.handleChangeBody(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Edit;