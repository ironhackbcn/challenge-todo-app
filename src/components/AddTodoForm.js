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
        this.setState({title: "", body: "", errMsg: ""})
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
            <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add New Task</h2>
                <label>Title:</label> <br/>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInput}></input> <br/>
                <label>Description:</label> <br/>
                <textarea name="body" value={this.state.body} onChange={this.handleInput}></textarea> <br/>
                <button className="green-btn" type="submit">Save</button>
            </form>
            {this.state.errMsg 
            ? <div className="err-msg">{this.state.errMsg}</div>
            : null}
        </>
        )
    }
}

export default AddTodoForm;