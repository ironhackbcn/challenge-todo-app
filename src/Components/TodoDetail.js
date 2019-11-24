import React, { Component } from "react";
import todoService from "../service/todoService";
import { Link } from "react-router-dom";

class TodoDetail extends Component {
  state = { todo: {}, title: "", body: "", editNoEdit: false, loading: true };

  handleStateForm = () => {
    const { editNoEdit } = this.state;
    const newValue = editNoEdit;
    this.setState({ editNoEdit: !newValue });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      title,
      body,
      todo: { _id }
    } = this.state;
    try {
      await todoService.updateTodo(title, body, _id);
     this.handleStateForm();
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.setState({ loading: true });
    todoService
      .getDetailTodo(this.props.match.params.id)
      .then(data => {
        this.setState({ todo: { ...data }, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { todo, title, body, editNoEdit } = this.state;
    console.log(todo);
    return (
      <div>
        {!editNoEdit && (
          <div>
            <h2>{todo.title}</h2>
            <h4>Description: {todo.body}</h4>

            <div className="actionbuttons">
              <button onClick={this.handleStateForm}>Update Todo</button>
            </div>
          </div>
        )}
        {editNoEdit && (
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title of todo"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="body">Body: </label>
              <input
                type="textarea"
                name="body"
                value={body}
                placeholder="What do you need todo?"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <input type="submit" value="Save" />
            </div>

            <div>
              <button onClick={this.handleStateForm}>Not update</button>
            </div>
          </form>
        )}

        <Link style={{ color: "black" }} to="/">
          Back to Todo's List
        </Link>
      </div>
    );
  }
}

export default TodoDetail;
