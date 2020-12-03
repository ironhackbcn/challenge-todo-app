import React, { Component } from "react";
import todoAxios from "../lib/todo-service";
import { Link } from "react-router-dom";

export default class TodosList extends Component {
  state = {
    todoList: [],
  };

  componentDidMount = () => {
    this.getTodoList();
  };


  getTodoList = async () => {
    const todoList = await todoAxios.getTodoList();
    console.log(todoList);
    this.setState({
      todoList: todoList,
    });
  };
  delete = async (id) => {
    console.log(id);
    const todoList = await todoAxios.deleteTodo(id);
    this.getTodoList();
    console.log(todoList);
  };

  render() {
    return (
      <div>
        <h2>Todos List</h2>

        <ul>
          {this.state.todoList &&
            this.state.todoList.map((todo) => {
              return (
                <li className="box" key={todo._id}>
                  <p><span>Title:</span> {todo.title}</p>
                  <p><span> Description:</span> {todo.body}</p>
                  <div className="display-buttons">
                    <Link to={{ pathname: `/edit/${todo._id}`, state: { todo }, }}> Edit</Link>
                    <button onClick={() => this.delete(todo._id)}>Delete</button>
                  
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
