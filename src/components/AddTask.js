import React, { Component } from 'react';
import todosService from "../services/todos.service"

class AddTask extends Component {
  state = {
    title: '',
    details: '',
    
  }

  handleInput = (event) => {
    let { value, name } = event.target;  
   
    this.setState( { [name]: value }  )
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    const {title, details} = this.state

    this.setState({title: '', details: ''})
  }

  createNew = () => 
  todosService
    .createToDo()
    .then((created) => this.setState({ tasks: created }));




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a task:</h2>
          <br />
          
          <label>Title:</label>
          <input 
            type="text" 
            name="title"
            value={this.state.title} 
            onChange={this.handleInput} 
          />
          
          <br />
          
          <label>Details:</label>
          <input 
            type="text" 
            name="details" 
            value={this.state.details} 
            onChange={this.handleInput}/>
          <br />
          
         
          
          <br/>
          <button type="submit">Create</button>
        </form>

        <br />
        
      </div>
    )
  }
}

export default AddTask;