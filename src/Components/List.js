import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    title: "",
    body: "",
    listtodo: []
  };

  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  //   Add to do to the databse
  createTodo = () => {
    axios

      .post(`http://localhost:4000/api/v1/todos`, this.state)
      .then(response => {
        console.log("Create new task");
      })
      .catch(err => console.log(err));

    this.setState({
      title: "",
      body: ""
    });
  };

  //   All list of TODO
  getTodo = () => {
    axios
      .get(`http://localhost:4000/api/v1/todos`)
      .then(response => {
        console.log(response.data);

        const listtodo = response.data;
        this.setState({ listtodo });
      })
      .catch(err => console.log(err));
  };

  removeTodo = id => {
    axios
      // It is done it with Delete because it is the same way in the backend
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then(() => {
        console.log("Remove it");
      })
      .catch(err => console.log(err));

    this.setState({
      listtodo: this.state.listtodo.filter(elem => {
        return elem._id !== id;
      })
    });
  };

  componentDidMount() {
    this.getTodo();
  }

  render() {
    return (
      <div>
        {/* Form to add tasks */}
        <form className="form-addtodo" onSubmit={this.createTodo}>
          <label> Title of a task to do </label>
          <input
            type="text"
            name="title"
            placeholder="Name of a task"
            value={this.state.title}
            onChange={this.handleInput}
          ></input>
          <label>Message of the task</label>
          <textarea
            className="form-control"
            name="message"
            value={this.state.message}
            onChange={this.handleInput}
            rows="5"
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        <div>
          <h2>List of todo</h2>
          {this.state.listtodo.map((todo, key) => {
            return (
              <div key={key}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <div className="task-edit">
                  <Link
                    to={`/editTask/${todo._id}`}
                    key={todo._id}
                    className="card-link"
                  >
                    Details
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    this.removeTodo(todo._id);
                  }}
                  key={todo._id}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
