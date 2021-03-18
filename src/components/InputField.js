import React, { Component } from "react";
import todoService from "./../todo-service/todo-service";
import {Link} from 'react-router-dom';

class InputField extends Component {
  state = {
    title: "",
    body: "",
    todos: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    todoService.createTodo(title, body).then((data) => {
      this.updateTodos();
    });
  };

  updateTodos = () => {
    todoService
      .seeAllTodos()
      .then((data) => this.setState({ todos: data, title: "", body: "" }));
  };

  componentDidMount = () => {
    this.updateTodos();
  };

  handleDelete = (id) => {
      console.log(id);
      
    todoService.deleteOneTodo(id).then((data) => {
      console.log("successfuly deleted");
      this.updateTodos();
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <h2>Create new task</h2>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(event) => this.handleChange(event)}
          ></input>

          <label>body</label>
          <input
            type="text"
            name="body"
            onChange={(event) => this.handleChange(event)}
          ></input>

          <button>Add to the list</button>
        </form>

        <h2>Todos</h2>
        <section>
          {this.state.todos.map((el) => {
            return (
                    <section key={el._id}>
                <Link to={`/${el._id}`}>
                        <h1>Title: {el.title}</h1>
                </Link>
                        <p>{el.body}</p>
                        <button onClick={() => this.handleDelete(`${el._id}`)}>Delete</button>
                    </section>
            );
          })}
        </section>
      </div>
    );
  }
}

export default InputField;
