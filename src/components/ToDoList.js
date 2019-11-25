import React, { Component } from 'react';
import todoService from '../services/todoService';
import '../css/todolist.css';
import { Link } from 'react-router-dom';
import ToDoRemove from './ToDoRemove';
import Form from '../components/Form';

class ToDoList extends Component {
  state = {
    todos: [],
    loading: true,
    displayAddForm: false,
  }

  async componentDidMount() {
    try {
      const todos = await todoService.getAllTodos();
      this.setState({
        todos,
        loading: false,
        displayAddForm: false
      })
    } catch (err) {
      console.log(err);
    }
  }

  removeToDo = (todo) => {
    const id = todo._id;
    todoService.removeToDo(id);
  }

  displayAddForm = () => {
    this.setState({
      displayAddForm: true
    })
  }

  editToDo = () => {
    return (
      <div>aquije</div>
    )
  }

  render() {
    const { todos, loading } = this.state;

    return (
      <div className=''>
        <div className='todo-content'>
          {
            !loading && todos.map((todo, key) => {
              return (
                <div className='todo-card' key={`${todo._id} - ${key}`}>
                  <div className='todo-card-content'>
                    <h3>
                      {todo.title}
                    </h3>
                    <p>{todo.body}</p>
                    <Link
                        className="list-group-item list-group-item-action"
                        to={{
                          pathname: `/${todo._id}`,
                          props: {
                            todo: { todo }
                          }
                        }}
                      >
                        <button>Editar</button>
                      </Link>
                    <ToDoRemove
                      remove={this.removeToDo.bind(this.state, todo)}
                    />
                    
                  </div>
                </div>
              )
            })
          }
        </div>
        
        <button onClick={this.displayAddForm}>Add todo</button>
        {
          this.state.displayAddForm
            ? <Form />
            : null
        }
      </div>
    );
  }
}

export default ToDoList;