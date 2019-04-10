import React, { Component } from 'react';
import CreateTodo from '../components/CreateTodo'
import todoService from '../services/todoService'

class NewTodo extends Component {

  handleSubmit = (data) => {
    todoService.createTodo(data)
      .then((result) => {
        console.log(result);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <CreateTodo onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewTodo;