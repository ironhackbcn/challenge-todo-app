import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddTodo from './AddTodo';

export default class TodosList extends Component {
  state = {
    listOfTodos: [],
  };

  getAllTodos = () => {
    axios
      .get('http://localhost:4000/api/v1/todos')
      .then(response => {
        const listOfTodos = response.data;

        this.setState({ listOfTodos });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div>
        <AddTodo getData={this.getAllTodos} />

        {this.state.listOfTodos.map(todo => {
          return (
            <div key={todo._id} className="todo">

                <Link to={`/todos/${todo._id}`}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
              </Link>
  
            </div>
          );
        })}
      </div>
    );
  }
}
