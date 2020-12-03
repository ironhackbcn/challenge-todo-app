import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateTask from "./CreateTask";


class TaskList extends Component {
    state = { Todos: [] };
  allTodos = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then(infoApi => {
      console.log(infoApi, "esa inbfo ahi")
      this.setState({
        Todos: infoApi.data
      });
    });
  };

  componentDidMount() {
    this.allTodos();
  }

  render() {
    return (
      <div className="navidad" >
      <div className="align-todos">
              <CreateTask getData={() => this.allTodos()}/>
          </div>
          <button className="btn" id="create" ><Link to={'/surprise'}>Surprise</Link></button>
        <div>
          {this.state.Todos.map((eachTodo) => {
            return (
              <div className="align-todos1">
               
                <h1>Present:<Link to={`/todos/${eachTodo._id}`}>
                   {eachTodo.title}
                </Link></h1>
                <h3>Description: {eachTodo.body}</h3> 
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;