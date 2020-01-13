import React, { Component } from "react";
import todoService from "../lib/todo-service";
import { Link } from "react-router-dom";

class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    this.getMyTodo();
  }

  getMyTodo = () => {
    const { id } = this.props.match.params;
    todoService
      .getMyTodo(id)
      .then(res => {
        this.setState({
          title: res.title,
          body: res.body
        });
      })
      .catch(err => console.log(err));
  };

  handleDelete = () => {
    const { id } = this.props.match.params;
    todoService.deleteTodo(id).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <h1>IN MY TASK</h1>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Link to="/edit">
          <button>EDIT</button>
        </Link>
        <button onClick={() => this.handleDelete()}>DELETE</button>
      </div>
    );
  }
}

export default MyTask;
