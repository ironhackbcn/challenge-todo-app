import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import todoService from '../sevices/TodoService'
class TodoList extends Component {
  state = {
    todoList: [],
    todoListEmpty: null,
  }

  componentDidMount= async()=>{
   await todoService.getAllTodos()

    .then(response=>{
        if(response.data.length > 0){
            this.setState({
                todoList: response.data
            })
        } else{
            this.setState({
                todoListEmpty:true,
            })
        }
    })
  }


  handleDeleteClick = todoId => {
    const { todoList } = this.state;
    todoService
      .deleteTodo(todoId)
      .then(() => {
        const filteredTodoList = todoList.filter(todo => {
          return todo._id !== todoId;
        });
        this.setState({
          todoList: filteredTodoList,
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { todoList } = this.state;
    return (
      <>
      <div>
      <h1>This is your List Tasks</h1>
            {todoList &&
            todoList.map((todo,index)=>(
                <div key={index}>
                <p> <strong>title</strong></p>
                <p>{todo.title}</p>
                <p> <strong>body</strong></p>
                <p>{todo.body}</p>
                <button onClick={()=>this.handleDeleteClick(todo._id)}>Delete</button>
                </div>
            ))
            }
            <button><Link to='/create-rodo'>Create Task!</Link></button>
           </div>
      </>
    )
  }
}

export default TodoList;