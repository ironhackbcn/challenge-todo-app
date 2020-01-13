import React, { Component } from "react";
import { Link } from "react-router-dom";
import todoService from "../lib/todo-service";
import TodoCard from "../Components/TodoCard";

class Home extends Component {
  state = {
    listOfTodo: [],
    title: "",
    body: ""
  };

  componentDidMount() {
    this.getAllTodo();
  }

  getAllTodo = () => {
    todoService
      .getAllTodo()
      .then(data => {
        this.setState({
          listOfTodo: data,
          title: data.title,
          body: data.body
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  };
  render() {
    const { listOfTodo } = this.state;
    const allTodo = listOfTodo.map((element, i) => {
      return (
        <Link to={`/task/${element._id}`} key={i}>
          <TodoCard
            title={element.title}
            body={element.body}
            id={element._id}
            key={i}
          />
        </Link>
      );
    });

    return (
      <div>
        <h1>Hello home</h1>
        <Link to={"/newtask"}>
          <button> Add Task</button>
        </Link>

        <div>{allTodo}</div>
      </div>
    );
  }
}

export default Home;
