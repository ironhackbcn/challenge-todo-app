import React, { Component } from 'react';
import axios from 'axios';


class AddTodo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '', body: '', isShowing: false
    }
  }
  
  
  handleFormSubmit = (event) => {
  event.preventDefault();
  
    const { title, body } = this.state;
  // we need to know to which project the task belongs, therefore we get its 'id'
                                              
  axios
  .post("http://localhost:4000/api/v1/todos",{ title, body })
  .then( () => {
      this.setState({title: '', body: ''});
  })
  .catch( error => console.log(error) )
  
  }
  
  
    
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render(){
    return(
      <div>
        <button onClick={this.toggleForm}> Add Todo </button>
  
        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" placeholder='Title'
                name="title" value={this.state.title}
                onChange={ (e) => this.handleChange(e)}/>
              
              <input name="body" placeholder='Description'
                value={this.state.body}
                onChange={ (e) => this.handleChange(e)} />
              
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
        }
      </div>
    )
  }
  }





export default AddTodo;



