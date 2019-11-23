import React, { Component } from 'react';
import toDoService from '../services/toDoService';

class Form extends Component {
  state = {
    title: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = async event => {
    const { title } = this.state;
    event.preventDefault();
    await toDoService.createTodo(title);
    console.log('title',title);
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="style-form">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="your task"
            className="style-input"
          />
          <input type="submit" value="ADD NEW" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default Form;
