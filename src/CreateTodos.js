import React, { Component } from "react";
import axios from 'axios';
import AddTodo from "./components/AddTodo"; 

class CreateTodos extends Component {
  constructor() {
    super();
    this.state = { 
        allTodos: []
    };
  }

    getAllTodos = () => {
        axios.get(`http://localhost:4000/api/v1/todos`).then(responseFromApi => {
          this.setState({
            allTodos: responseFromApi.data
          });
        });
      };
    
      componentDidMount() {
        this.getAllTodos();
      }

    render() {
    return (
        <div>
            <AddTodo getData={() => this.getAllTodos()} />
        </div>
        );
    };
}

export default CreateTodos;