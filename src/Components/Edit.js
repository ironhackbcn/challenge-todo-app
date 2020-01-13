import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Edit extends Component {
  state = {
    title: "",
    body: ""
  };

  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  updateTodo = () => {
    const id = this.props.match.params.id;
    console.log(id);
    
    console.log(this.state);

    axios
      .put(`http://localhost:4000/api/v1/todos/${id}`, this.state)
      .then(response => {
        console.log("update task");
      })
      .catch(err => console.log(err));
    this.setState({
      title: "",
      body: ""
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }

  render() {
    return (
      <div>
        <div>
          <button>
            <Link to={`/`}>Index page</Link>
          </button>
        </div>
        <form className="form-addtodo" onSubmit={this.updateTodo}>
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
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
            rows="5"
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
