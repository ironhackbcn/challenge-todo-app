import React, { Component } from 'react';
import Moment from 'moment';
import todoService from '../service/todoService';


class TodoCard extends Component {

    handleDeleteTodo = event =>{
        
        event.preventDefault()
        const{todo} = this.props
        console.log(todo)
        todoService.deleteTodo(todo._id)
    }
    render() {
        return (
            <div>
                <h1> {this.props.todo.title} </h1>
                <p>{Moment(this.props.todo.createdAt).format('L')}</p>
                <p> {this.props.todo.body} </p>
                <input type="submit" value='delete' onClick={this.handleDeleteTodo}/>
            </div>
        )
    }
}




export default TodoCard
