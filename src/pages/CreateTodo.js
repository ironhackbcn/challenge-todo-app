import React, { Component } from 'react';
import apiService from '../services/apiService';
import CreateForm from '../components/CreateForm';

class CreateTodo extends Component {

  handleSubmit = (data) => {
    apiService.createTodo(data)
      .then((data) => {
        console.log(data)
        this.props.history.push('/list');
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="create-todo">
        <CreateForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateTodo;