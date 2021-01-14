import React, { Component } from 'react';
import todoService from './../lib/todo-service';

class TodoCard extends Component {

    state = {
        title: "",
        body: "",
        showEdit: false
    }

    toggleEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    submitEditForm = (event) => {
        event.preventDefault();
        const {title, body} = this.state;
        const id = this.props.task._id;
        todoService.editTodo(id, title, body)
            .then(response => {
                const {title, body} = response.data;
                this.setState({title: title, body: body, showEdit: false})
            })

    }

    componentDidMount() {
        this.setState({title: this.props.task.title, body: this.props.task.body});

    }

    render() {
        return (
            this.state.showEdit 
            ? <form onSubmit={(e)=>this.submitEditForm(e)}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInput}></input>
                <label>Description:</label>
                <textarea name="body" value={this.state.body} onChange={this.handleInput}></textarea>
                <button type="submit">Save</button>
                <button onClick={this.toggleEdit}>Cancel</button>
            </form>
            : 
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
                <button onClick={this.toggleEdit}>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default TodoCard;
