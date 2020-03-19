import React, { Component } from "react";
import axios from "axios";

class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      task: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, task } = this.state;

    axios
      .post(
        "http://localhost:3000/todos",
        {
          title,
          task
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          title: "",
          task: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { title, task } = this.state;
    return (
      <div>
        <div>
          <h1>Create a To Do task!</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <ul className="create-todo">
                <li>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label>Task:</label>
                  <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>
            </div>
            <button type="submit" id="button-todo">
              Create ToDo
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateToDo;
