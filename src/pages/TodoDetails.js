import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import EditTodo from "./../components/EditTodo";

class TodoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleTodo();
  }

  getSingleTodo = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then((responseFromApi) => {
        const todo = responseFromApi.data;
        this.setState(todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleTodo();
    } else {
      return (
        <EditTodo
          todo={this.state}
          getTodo={this.getSingleTodo}
          {...this.props}
        />
      );
    }
  };

  deleteTodo = () => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then(() => {
        this.props.history.push("/todos");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <div>{this.renderEditForm()}</div>
        <button onClick={() => this.deleteTodo()}>Delete Todo</button>
        <br />
        <Link to={"/todos"}>Back to the list</Link>
      </div>
    );
  }
}

export default TodoDetails;
