import React, { Component } from 'react';
import axios from 'axios';
import CreateTodo from './CreateTodo';

class Todo extends Component {
    state = {
        list: []
    };

    getTodos = () => {
        axios.get("http://localhost:4000/api/v1/todos").then(response =>{
            this.setState({list: response.data})
        })
    }

    deleteFunction = (id) => {
        axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
        .then( () =>{
            this.props.history.push('/todo');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    componentDidMount = () =>{
        this.getTodos();
    }

    render() {
        return (
            <div>
                <div>
                    <button><a href="/create">Create One Todo</a></button>
                </div>
               {this.state.lista.map((oneTodo) =>{
                   return(
                       <div key={oneTodo._id}>
                           <h1>{oneTodo.title}</h1>
                           <h3>{oneTodo.body}</h3>
                           <a href={`/todos/${oneTodo._id}`}>Edit</a>
                           <button onClick={() => this.deleteFunction(oneTodo._id)}>DELETE</button>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default Todo;