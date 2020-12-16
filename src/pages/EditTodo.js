import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theTodo.title,
      body: this.props.theTodo.body,
    };
  }

  handleFormSubmit = (e) => {
    const { title, body } = this.state;
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.theTodo._id}`, {
        title,
        body,
      })
      .then(() => {
        this.props.history.push("/todos");
      })
      .catch((err) => console.log(err));
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeBody = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3 className = "mt30">Edit task</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChangeTitle(e)}
            />
          </div>
          <div>
            <label>Body</label>
            <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={(e) => this.handleChangeBody(e)}
            />
          </div>
          <div>
            <input type="submit" value="EDIT TASK" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditTodo;
