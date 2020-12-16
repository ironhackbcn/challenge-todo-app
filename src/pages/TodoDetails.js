import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import EditTodo from "./EditTodo";

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
    axios
      .get(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        const singleTodo = response.data;
        this.setState(singleTodo);
      })
      .catch((err) => console.log(err));
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleTodo();
    } else {
      return (
        <EditTodo
          theTodo={this.state}
          getTheTodo={this.getSingleTodo}
          {...this.props}
        />
      );
    }
  };

  deleteOneTodo = () => {
    const { id } = this.props.match.params;
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .catch((err) => console.log(err));
    this.props.history.push("/todos");
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <Navbar />

        <div className="todoDetail">
          <h1 className="mt30">{title}</h1>
          <article>
            <h5>{body}</h5>
          </article>
          <div>
            <button className="btn" onClick={() => this.deleteOneTodo()}>
              DELETE TASK
            </button>
          </div>
        </div>
        <div>{this.renderEditForm()}</div>
          <div>
            <button className="btn-dark mt30" onClick={this.props.history.goBack}>
              BACK TO LIST
            </button>
          </div>
      </div>
    );
  }
}

export default TodoDetails;
