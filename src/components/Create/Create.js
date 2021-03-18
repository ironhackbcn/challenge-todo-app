import React, { Component } from "react";
import axios from 'axios';

class Create extends Component {
    state ={
        title: '',
        body: ''
    }

    getTodoList = () => {
        axios.get('http://localhost:4000/api/v1/todos')
        .then((response) => {
          const { lists } = response
          this.setState( { todoList: lists } )
        })
        .catch((err) => console.log(err))
      }

    handleChange=(event)=>{
        const { name, value}= event.target
        this.setState({ [name]: value })
    }
    
    handleFormSubmit=(event)=>{
        
        event.preventDefault();
        const { title, body} = this.state

        axios.post('http://localhost:4000/api/v1/todos', {title, body})
        .then((response) => {
          console.log('response',response)
          
        this.getTodoList()
       

        })
        .catch((err) => console.log(err))
    this.setState({ title:'', body:'' })

    }


  render() {


    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />

      
          <input type="submit" value="Create list item" />
        </form>
      </div>
    );
  }
}

export default Create;
