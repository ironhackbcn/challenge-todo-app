import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";

class TodosList extends Component {
  state = {
    listOfTodos: [],
  };

  componentDidMount() {
    this.fetchAllTodos();
  }

  fetchAllTodos = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((response) => {
        const todos = response.data;
        this.setState({ listOfTodos: todos });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>Tasks List</h1>
        <div className="cardsContainer">
          {this.state.listOfTodos.map((todo) => {
            return <TodoCard key={todo._id} {...todo} />;
          })}
        </div>
      </div>
    );
  }
}

export default TodosList;
