import React, { Component } from "react";
import taskService from "../../services/taskservice";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    try {
      await taskService.createTask(title, body);
      await this.props.loadTaskList();
    } catch (error) {
      console.log(error);
    }
    this.setState({ title: "", body: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className='new-task-component'>
        <h2>New task form:</h2>
        <form className='new-task-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            placeholder='Title of your task'
            minLength='1'
          />
          <input
            type='text'
            name='body'
            value={body}
            onChange={this.handleChange}
            placeholder='Body of your task'
            minLength='1'
          />

          <button type='submit'> Create new task </button>
        </form>
      </div>
    );
  }
}

export default NewTask;
