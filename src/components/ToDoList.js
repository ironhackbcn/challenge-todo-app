import React, { Component } from 'react';
import todoService from '../services/todoService';

class ToDoList extends Component {
  state = {
    todos: [],
    loading: true
  }

  async componentDidMount(){
    try {
      const todos = await todoService.getAllTodos();
      this.setState({
        todos,
        loading: false
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { todos, loading } = this.state;

    return (
      <div className='todo-wrapper'>
        <div className='todo-content'>
          <h1>todo list</h1>
          {
            !loading && todos.map((todo, key) => {
              return(
                <div className='todo-card' key={`${todo._id} - ${key}`}>
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default ToDoList;