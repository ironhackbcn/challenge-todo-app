import React, { Component } from "react";
import todoservice from '../lib/service'

class Todo extends Component {
    state = {
        todo: {},
        title: '',
        body: '',
        editable: false
    }

    getTheTodo = async () => {
        const {params} = this.props.match 
        const todo = await todoservice.getTodo(params.id)
        this.setState({
            todo: todo,
            title: todo.title,
            body: todo.body
        })
        console.log(this.state.title)
    }

    componentDidMount(){
        this.getTheTodo()
    }

    handleChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({ [name]: value });
    };
    
    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        const id = this.state.todo._id
        console.log(title, body)
        await todoservice.editTodo(id, title, body );
        this.setState({
            title: '',
            body: ''
        });
        this.props.history.push('/')
    }

    removeFromList = async (id) => {
        
        await todoservice.deleteTodo(id)
        this.props.history.push('/')
    }
    render(){
        const {todo, title, body, editable} = this.state
        return(
            <div>
            {editable ? <div>
                <form onSubmit={this.handleFormSubmit}>
            <div className="form_part">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label>Description:</label>
              <textarea
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </div>
            <input
                className="form_button_btn"
                type="submit"
                value="Add changes"
              />
          </form>
          <button className = 'btn' onClick={() => this.props.history.goBack()}>Go back to the homepage</button>
            </div>
        : <div>
                <h1>{title}</h1>
                <h3>{body}</h3>
                <div><button className = 'btn' onClick = {() => this.setState({editable: !editable})}>Edit</button>
                <button className = 'btn_back' onClick = {() => this.removeFromList(todo._id)}>Delete</button>
                </div>
                <div><button className = 'btn_back' onClick = {() => this.props.history.goBack()}>Go Back</button></div>   
            </div>}
            </div>
            
        )}
}

export default Todo;