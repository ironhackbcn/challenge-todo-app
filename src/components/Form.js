import React, { Component } from 'react';
import toDoService from '../services/toDoService';
import Body from './Body';

class Form extends Component {
  state = {
    title: '',
    todo: [],
  };

actualizarTask = async () => {}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = async event => {
    const { title } = this.state;
    event.preventDefault();
    await toDoService.createTodo(title);
    console.log('title', title);
  };

  render() {
    const { todo } = this.state;
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
        {todo.map(aTodo => {
          return (
            <div key={aTodo._id} className="style-card">
              <Body event={aTodo} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Form;
