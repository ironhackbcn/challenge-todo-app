import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CrearTodo from "./CrearTodo"

class Todo extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  getTodo = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then((todo) => {
      this.setState({
        lista: todo.data,
      });
    });
  };

  componentDidMount() {
    this.getTodo();
  }
  render() {
    return (
      <div>
        <h1>Lista</h1>
        <CrearTodo/>
        {this.state.lista.map((nombre) => {
          return (
            <div key={nombre._id}>
              <h1>Title: {nombre.title}</h1>
              <h2>Body: {nombre.body}</h2>
              <button><a href="/create"></a>Crear</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
