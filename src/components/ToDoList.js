import React, { Component } from 'react';
import todoService from '../services/todoService';
import '../css/todolist.css';

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
          {
            !loading && todos.map((todo, key) => {
              return(
                <div className='todo-card' key={`${todo._id} - ${key}`}>
                  <p><strong>{todo.title}</strong></p>
                  <p>{todo.body}</p>
                  <button>delete</button>
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