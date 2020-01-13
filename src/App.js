import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>To- Do List</h1>
        <section className="createToDoContainer">
          <Form></Form>
          <form className="App" onSubmit={this.handleFormSubmit}>
            <label className="toDoTitle">TITLE</label>
            <input
              type="text"
              name="title"
              value={this.state.term} 
              onChange={this.handleChange}
              placeholder="What do you want to do?" 
              />

            <label className="toDoDescription">DESCRIPTION</label>
            <input
              type="text"
              name="description"
              value={this.state.term} 
              onChange={this.handleChange}
              placeholder="Give me some details" 
              />
            <button>Submit</button>
          </form>
        </section>
        <List items={this.state.items} />
      </div>
    );
  }
}
