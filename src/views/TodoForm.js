import React, { Component } from 'react';
// import todoService from '../services/todoService';

class TodoForm extends Component {
  state = {
    body: "",
    title: "",
    submitted: false,
    tasks: [],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: this.state.title,
      body: this.state.body,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      submitted: true,
    });
    // todoService.postTodo(this.state);
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
      body: "",
      title: "",
      submitted: false,
    })
  }


  render() {
    const { description, title, tasks } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h2>What's your next task?</h2>
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={this.handleChange}></input>

          <label>Description</label>
          <input type="text" name="body" value={description} onChange={this.handleChange}></input>

          <button type="submit">Save task</button>

          <h2>User tasks</h2>
          <div className="tasks">
            {tasks.map(task => {
              return (
                <div className="task">
                  <h4>{task.title}</h4>
                  <p>{task.body}</p>
                </div>
              )
            })}
          </div >
        </form>
      </div >
    );
  }
}

export default TodoForm;