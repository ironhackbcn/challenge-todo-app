import todoService from "../../Services/todo-service";
import React, { Component } from "react";
import "./AllTodos.css";
import { Link } from "react-router-dom";

class AllTodos extends Component {
  state = {
    allTodos: [],
  };

  componentDidMount() {
    todoService
      .getAllTodos()
      .then((data) => {
        this.setState({ allTodos: data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = async (id) => {
    try {
      const { allTodos } = this.state;
      await todoService.deleteTodo(id);
      const allTodosCopy = [...allTodos];

      const deletedIndex = allTodosCopy.findIndex((todo) => todo._id === id);
      if (deletedIndex >= 0) {
        allTodosCopy.splice(deletedIndex, 1);
        this.setState({ allTodos: allTodosCopy });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { allTodos } = this.state;
    return (
      <div className="all-todos">
        <h2>All Todos</h2>
        {allTodos.map((todo) => {
          return (
            <div key={todo._id}>
              <h3>{todo.title}</h3>

              <p>{todo.body}</p>
              <button
                onClick={() => {
                  this.handleDelete(todo._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllTodos;
