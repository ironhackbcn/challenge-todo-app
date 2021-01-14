import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  state = {
    todoList: [],
    showEdit: false,
  };
  componentDidMount() {
    this.getTodoList();
  }

  getTodoList() {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ todoList: apiResponse.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (todoId) => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${todoId}`)
      .then((apiResponse) => {
        console.log(apiResponse);
        this.getTodoList();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const todoList = this.state.todoList;
    const newTodoItems = this.props.newTodoItems;
    console.log(newTodoItems);
    return (
      <div className="todo-list">
        {todoList.map((todo) => {
          return (
            <TodoListItem
              key={todo._id}
              todo={todo}
              handleDelete={this.handleDelete}
            />
          );
        })}
        {newTodoItems.map((todo) => {
          return (
            <TodoListItem
              key={todo._id}
              todo={todo}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}
export default TodoList;
