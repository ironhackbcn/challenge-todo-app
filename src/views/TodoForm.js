import React, { Component } from 'react';
import todoService from '../services/todoService';

class TodoForm extends Component {
  state = {
    description: "",
    title: "",
    submitted: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, title } = this.state
    todoService.postTodo({ description, title });
    this.reset();
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    })
  }

  reset = () => {
    this.setState({
      description: "",
      title: "",
      submitted: false,
    })
  }


  render() {
    const { description, title } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h2>What's your next task?</h2>
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={this.handleChange}></input>

          <label>Description</label>
          <input type="text" name="description" value={description} onChange={this.handleChange}></input>

          <button type="submit">Save task</button>
        </form>
      </div >
    );
  }
}

export default TodoForm;