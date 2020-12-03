import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import TodoCard from '../components/TodoCard'

class TodosList extends Component {
  state = {
    listOfTodos: [],
  }

  componentDidMount() {
    this.fetchAllTodos();
  }

  fetchAllTodos = () => {
    axios.get('http://localhost:4000/api/v1/todos')
    .then( (response) =>{
      const todos = response.data;
      console.log(todos, 'all todos')
      this.setState({ listOfTodos: todos})
    })
    .catch( (err) => console.log(err));
  }

/* deleteOneTodo = () => {
    axios.delete('https://api.punkapi.com/v2/todos/:id')
    .then( (response) =>{
      const todos = response.data;
      console.log(todos, 'all todos')
      this.setState({ listOfTodos: todos})
    })
    .catch( (err) => console.log(err));
}  */

  render() {
    return (
      <div>
        <Navbar />
        <h1>All Todos</h1>

        <button onClick={this.fetchAllTodos} id="show-all">
          Show all todos
        </button>

        {this.state.listOfTodos.map(todo => {
          return (
            <TodoCard key={todo.id} {...todo} />
          )
        })}
      </div>
    )
  }
}

export default TodosList