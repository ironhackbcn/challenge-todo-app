import React, { Component } from "react";
import todoService from "./../todo-service/todo-service";

export class TaskList extends Component {
  state = {
    todo: [],
    updateMode: false,
    title: "",
    body: "",
  };

  handleDelete = (id) => {
    console.log(id);
    todoService.deleteOneTodo(id).then((data) => {
      console.log("successfuly deleted");
    });
    this.props.history.push("/");
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    todoService.seeOneTodo(id).then((data) => {
      console.log(data);
      this.setState({ todo: data });
    });
  };

  showUpdateMode = () => {
    this.setState({ updateMode: !this.state.updateMode });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  updateMode = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { title, body } = this.state;
    todoService
      .updateTodo(id, { title, body })
      .then((data) => this.setState({ todo: data }));
  };

  render() {
    return (
      <div>
        <h2>TO DO</h2>
        <section key={this.state.todo._id}>
          <h1>Title: {this.state.todo.title}</h1>
          <p>Description: {this.state.todo.body}</p>
          <button onClick={() => this.handleDelete(`${this.state.todo._id}`)}>
            Delete
          </button>
          <hr />
          <button onClick={this.props.history.goBack}>Go Back</button>
          <hr />

          <button onClick={this.showUpdateMode}>update</button>

          {this.state.updateMode && (
            <section>
              <h4>Update your task</h4>

              <form onSubmit={this.updateMode}>
                <h2>Create new task</h2>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={(event) => this.handleChange(event)}
                ></input>

                <label>body</label>
                <input
                  type="text"
                  name="body"
                  onChange={(event) => this.handleChange(event)}
                ></input>

                <button>Update Task</button>
              </form>
            </section>
          )}
        </section>
      </div>
    );
  }
}

export default TaskList;
