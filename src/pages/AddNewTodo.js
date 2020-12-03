import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';

class AddNewTodo extends Component {
    state = {
      title: "",
      body: ""
    }
  
    handleChange = e => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      axios.post('http://localhost:4000/api/v1/todos', this.state)
      .then( () => {
        console.log('New todo created');
        this.props.history.push('/todos');
      })
      .catch( (err) => console.log(err));
    } 
  
    render() {
        const { title, body } = this.state;
        return (
          <div>
          <Navbar />
            
            <h2>Add new todo</h2>
    
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
              </div>
              
              <div>
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={this.handleChange} />
              </div>
              <div>
                <input type="submit" value="Add a new todo" />
              </div>
            </form>
          </div>
        )
      }
    }
    
    export default AddNewTodo