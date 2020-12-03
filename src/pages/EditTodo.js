import React, { Component } from 'react'
import auth from "../lib/auth-service";

class EditTodo extends Component {
    state = {
        title: this.props.theTodo.title,
        body: this.props.theTodo.body
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let { title, body } = this.state
        auth.editTodo({ title, body })
        this.props.getTheTodo();
        this.props.history.push("/todos")
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeBody = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label> Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChangeTitle(e)} />

                    <label> Body: </label>
                    <input type="text" name="body" value={this.state.body} onChange={ e => this.handleChangeBody(e)} />

                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}

export default EditTodo;
