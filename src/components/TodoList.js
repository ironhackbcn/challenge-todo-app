import React, { Component } from 'react'
import todoService from '../sevices/TodoService'

export default class TodoList extends Component {
    state={
        todos:[],

    }

    componentDidMount= async()=>{
        const allTodos = await todoService.getAllTodos();
        this.setState({
            todos:allTodos
        })
    }
    handleDelete = async (todoId)=>{
        const newArray =  await todoService.deleteTodo(todoId); 
        this.setState({
            todos:newArray
        })
        console.log(this.state.todos)

    }
    render() {
        const {todos}=this.state;
        return ( 
           <div>
            {todos &&
            todos.map((todo,index)=>(
                <div key={index}>
                <p> <strong>title</strong></p>
                <p>{todo.title}</p>
                <p> <strong>body</strong></p>
                <p>{todo.body}</p>
                <button onClick={this.handleDelete}>Delete</button>
                </div>
            ))
            }
           </div>
        )
    }
}
