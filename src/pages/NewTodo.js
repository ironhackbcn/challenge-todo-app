import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import todoService from '../sevices/TodoService';
import TodoInput from '../components/TodoInput';

export default class NewTodo extends Component {
    state={
        title:'',
        body:'',
    }
    handleOnChange=(event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        const{
            title,
            body,
        }=this.state
        
        const newTodo={
            title,
            body,
        }
        todoService.createTodo(newTodo)
        .then(response=>{
            this.props.history.goBack()
        })
        .catch(error=> console.log(error))
    }
    render() {
        const {title,body}=this.state
        return (
            <>
            <button><Link to='/'>Go Back</Link></button>
            <div>
                <TodoInput title={title} body={body} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit}></TodoInput>
            </div>
            </>
        )
    }
}
