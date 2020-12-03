import React, { Component } from 'react'
import TodoService from '../lib/todo-service';
import { Link } from "react-router-dom";
import './todo.css';

class Todo extends Component {

    state = {
        todo: [],
        title: "",
        body: "",
    }
    componentDidMount() {
        this.alltodo();
    }

    alltodo = () => {
        TodoService.getAllTodos()
        .then(responseFromApi => {
            this.setState({
                todo: responseFromApi
            })
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          await TodoService.createTodo(
            this.state
          );
          this.setState({
            title: "",
            body: "",
          })
        } catch (error) {
          console.log("Error while adding todo: ", error);
        }
    };
    

    render() {
        return (
            <div className="containerTodo">
                {this.state.todo.map((all) => {
                    return (
                        <div key={all._id} >
                        <Link to={`/todos/${all._id}`} className="eachTodo">
                            <p>Title: {all.title} </p>
                        </Link>
                        </div>
                    )
                })}
                <div>
                    <form onSubmit={this.handleFormSubmit} className="form">
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        className="input"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="Title"
                        />

                    <input
                        type="text"
                        name="body"
                        value={this.state.body}
                        className="input"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="Body"
                        />
                    <input type="submit" value="New Todo" className="button"/>
                    </form>
                </div>

            </div>
        )
    }
}
export default Todo;