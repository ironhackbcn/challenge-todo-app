import React, { Component } from 'react';
import todoService from '../services/todoService';
import '../css/todolist.css';
import TodoCard from '../components/TodoCard';

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

  removeToDo = (todo) => {
    const id = todo._id;
    console.log('RECIBO  => ', id);
    todoService.removeToDo(id);
  }

  render() {
    const { todos, loading } = this.state;

    return (
      <div className='todo-wrapper'>
        <div className='todo-content'>
          {
            !loading && todos.map((todo, index) => {
              console.log('PASO ===>>> ', todo );
              return(
                <div>
                <TodoCard
                  key = {`${todo._id}-${index}`}
                  title = {todo.title}
                  body = {todo.body}
                  remove = {this.removeToDo.bind(this.state, todo)}
                />
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