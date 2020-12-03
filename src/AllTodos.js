import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class AllTodos extends Component {
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
            <div className="projects-block">
              <h1>List Tasks</h1>
            {this.state.allTodos.map((todo) => {
                return (
                <div className="project-card" key={todo._id}>
                    <input type="checkbox"/>
                    <Link to={`/todos/${todo._id}`}>
                    <h3>{todo.title}</h3>
                    </Link>
                </div>
                );
            })}
            </div>
            <div>
            </div>
        </div>
        );
    };
}

export default AllTodos;