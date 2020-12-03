import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

class TodoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleTodo();
  }

  getSingleTodo = () => {
    const { id } = this.props.match.params;
    //const { id } = this.state.listOfTodos._id;
    console.log(id, "id");
    axios
      .get(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        const singleTodo = response.data[0];
        console.log(singleTodo, "single todo");
        this.setState(singleTodo);
      })
      .catch((err) => console.log(err));
  };

  deleteOneTodo = () => {
    //const { id } = this.state.listOfTodos._id;
    const { id } = this.props.match.params;

    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        const singleTodo = response.data[0];
        console.log(singleTodo, "todo deleted");
        this.setState(singleTodo);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <Navbar />
        <h2>{title}</h2>
        <article>
          <p>{body}</p>
        </article>
        <div className="btn">
          <button onClick={this.deleteOneTodo}>Delete todo</button>
        </div>
        <div className="btn">
          <button onClick={this.props.history.goBack}>Go back</button>
        </div>
      </div>
    );
  }
}

export default TodoDetails;
