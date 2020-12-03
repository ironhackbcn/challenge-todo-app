import React, { Component } from 'react'
import auth from "../lib/auth-service";
import EditTodo from './EditTodo';

class TodoDetails extends Component {
    state = {
        todo: ""
    }


    componentDidMount() {
        this.getTodo();
    }

    getTodo = () => {
        const todoId = this.props.match.params.id
        return (
            auth.todoDetails(todoId)
            .then(response => this.setState({ todo: response }))
            .catch(error => console.log(error))
        )
    }

    renderEditForm = () => {
        if(!this.state.todo.title){
            this.getTodo();
        } else{
            return <EditTodo theTodo={this.state.todo} getTheTodo={this.getTodo} {...this.props} />
        }
    }

    render() {
        return (
            <div>
                <h1> Todo Details </h1>
                <div key={this.state.todo._id}>
                    <h2> {this.state.todo.title} </h2>
                    <p> {this.state.todo.body} </p>
                </div>
                <div className="edit-form">
                    <h1> Edit Form </h1>
                    {this.renderEditForm()}
                </div>
            </div>
        )
    }
}

export default TodoDetails;
