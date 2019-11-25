import React, { Component } from 'react';
import todoService from '../services/todoService';

class EditForm extends Component {
  
  state = {
    
    title: this.props.title,
    body: this.props.body
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    todoService.updateTodo(this.props.id, this.state);

    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />

            <label>Body</label>
            <input type="text" name="body" value={this.state.body} onChange={(e) => this.handleChange(e)} />

            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditForm;