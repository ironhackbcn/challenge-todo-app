import React, { Component } from 'react';

class CreateTodo extends Component {

  state = {
    title:'',
    body:''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hola 1');
    this.props.onSubmit(this.state);
    console.log('hola 2');
    this.setState({
      title:'',
      body:''
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="container-todo-form">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <div className="title-row">
            <h2 className='todo-h2'>Create <br /> Task</h2>
            <button className="create-button" type="submit">Create</button>
          </div>
          <input className="input-todo" placeholder="title..." onChange={this.handleChange} value={this.state.title} name="title" type="text"/>
          <input className="input-todo" placeholder="body..." onChange={this.handleChange} value={this.state.body} name="body" type="text"/>

        </form>
      </div>
    );
  }
}

export default CreateTodo;