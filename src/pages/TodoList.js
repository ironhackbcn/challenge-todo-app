import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AddTodo from "./../components/AddTodo";

class TodoList extends Component {
  state = {
    listOfTodos: [],
  };

  getAllTodos = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((response) => {
        this.setState({ listOfTodos: response.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div id="todo-list">
        <AddTodo getAllTodos={this.getAllTodos} />
        <div>
          {this.state.listOfTodos.map((todo) => {
            return (
              <div className="todo" key={TodoList.id}>
                <Link to={"/todos/" + todo._id}>
                  <h3>{todo.title} </h3>
                  <p>{todo.body} </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
