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

    cancelEdit = () => {
        this.setState({title: this.props.task.title, body: this.props.task.body});
        this.toggleEdit();
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

    deleteTodo = () => {
        const id = this.props.task._id;
        this.props.deleteTodo(id);
    }

    componentDidMount() {
        this.setState({title: this.props.task.title, body: this.props.task.body});
    }

    render() {
        return (
            this.state.showEdit 
            ? <form className="form" onSubmit={(e)=>this.submitEditForm(e)}>
                <label>Title:</label> <br/>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInput}></input> <br/>
                <label>Description:</label> <br/>
                <textarea name="body" value={this.state.body} onChange={this.handleInput}></textarea> <br/>
                <button  className="green-btn" type="submit">Save</button>
                <button className="red-btn" onClick={this.cancelEdit}>Cancel</button>
            </form>
            : 
            <div className="todo-card">
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
                <button className="green-btn" onClick={this.toggleEdit}>Edit</button>
                <button className="red-btn" onClick={this.deleteTodo}>Delete</button>
            </div>
        )
    }
}

export default TodoCard;
