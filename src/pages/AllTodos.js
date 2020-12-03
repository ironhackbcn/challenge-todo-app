import  axios  from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AllTodos extends Component {
  constructor(){
    super();
    this.state = { listOfTodos: [] }
  }
  
  getAllTodos = () => {
    axios
    .get("http://localhost:4000/api/v1/todos").then(responseFromApi => {
        this.setState({
            listOfTodos: responseFromApi.data
        });
        
      });
    };

    componentDidMount() {
        this.getAllTodos();
      }
    
    render() {
        return (
            <div className="">
                <h1 className="">To do list</h1>
                <div>
                { this.state.listOfTodos.map( todo => {
                    return (
                    <div key={todo._id}>
                        <Link to={`/todos/${todo._id}`}>
                        <h3>{todo.title}</h3>
                        </Link>
                        <p >{todo.body} </p> 
                    </div>
                    )})
                }
                </div>
            </div>
        )
    }
}
export default AllTodos;