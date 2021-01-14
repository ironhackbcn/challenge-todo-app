import React, { Component } from 'react';
import todoService from './../lib/todo-service';

class AddTodoForm extends Component {

    state = {
        title: "",
        body: "",
        errMsg: ""
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    emptyForm = () => {
        this.setState({title: "", body: ""})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title, body} = this.state;
        todoService.createTodo(title, body)
            .then(() => {
                this.emptyForm();
                this.props.showAllTodos();
            })
            .catch((err) => {
                this.setState({errMsg: err.response.data.message})
            }); 
    }



    render() {
        return (
            <>
            <h2>Add New Task</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInput}></input>
                <label>Description:</label>
                <textarea name="body" value={this.state.body} onChange={this.handleInput}></textarea>
                <button type="submit">Save</button>
            </form>
            {this.state.errMsg 
            ? <div>{this.state.errMsg}</div>
            : null}
        </>
        )
    }
}

export default AddTodoForm;