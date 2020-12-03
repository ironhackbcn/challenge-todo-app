import React, { Component } from 'react'
import auth from "../lib/auth-service";
import AddTodo from './AddTodo';
import { Link } from "react-router-dom";

class Todos extends Component {
    state = {
        listOfTodos: []
    }



    allTodos = async () => {
        try {
            const todos = await auth.allTodos();
            this.setState({ listOfTodos: todos})
        } catch (error) {
            console.log(error)
        }
    };

    componentDidMount(){
        this.allTodos()
    }

    deleteTodo = (id) => {
        auth.deleteTodo(id);
    }


    render() {
        return (
            <div>
                {this.state.listOfTodos.map((todo, index) => {
                    return(
                        <div key={index}>
                            <Link to={`/todos/${todo._id}`}><h1> {todo.title} </h1></Link>
                            <p> {todo.body} </p>
                            <button onClick={() => this.deleteTodo(todo._id)}> Delete </button>
                        </div>
                    )
                })}
                <h2> Add Todo </h2>
                <AddTodo/>
            </div>
        )
    }
}

export default Todos;
