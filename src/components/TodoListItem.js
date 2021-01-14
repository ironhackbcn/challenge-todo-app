import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoListItem extends Component {
  state = {
    completed: false,
  };

  handleComplete = () => {
    console.log(this.state.completed);
    this.setState({ completed: !this.state.completed });
  };

  render() {
    const todo = this.props.todo;
    return (
      <div className="todo-item">
        <div>
          <p className="title">{todo.title}</p>
          <p className="body">{todo.body}</p>
        </div>
        <div className="list-actions">
          <button onClick={() => this.props.handleDelete(todo._id)}>
            Delete
          </button>
          <Link className="link" to={`/edit/${todo._id}`}>
            Edit Post
          </Link>

          {this.state.completed ? (
            <button className="done" onClick={this.handleComplete}>
              Done
            </button>
          ) : (
            <button className="pending" onClick={this.handleComplete}>
              Pending
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default TodoListItem;
