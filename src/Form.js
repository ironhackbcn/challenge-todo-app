import React, { Component } from 'react';
import axios from 'axios';
// import toDoService from './lib/todo-service';


class Form extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", body: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {title, body } = this.state;
    
    axios.post("http://localhost:4000/api/v1/todos", { title, body })
      .then( () => {
        this.props.getAllTodos();
        this.setState({title: "", body: ""});
      })
      .catch( (err) => console.log(err) )
  }


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>TITLE:</label>
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={ (e) => this.handleChange(e) }/>
          
          <label>BODY:</label>
          <textarea name="body" 
            value={this.state.body} 
            onChange={ (e) => this.handleChange(e) } />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;