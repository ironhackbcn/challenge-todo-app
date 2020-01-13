import React, { Component } from 'react';
import axios from 'axios';


class DeleteTodo extends Component {
  state= {
    title: '',
    body: '',
  };

  getSingleTodo = () => {
    const { id } = this.props.match.params;
    axios
    .get(`http://localhost:4000/api/v1/todos/${id}`)
    .then( (apiResponse) => {
      const theTodo = apiResponse.data;
      this.setState(theTodo);
    })
    .catch( (err) => console.log(err))
  }
  
  componentDidMount(){
    this.getSingleTodo();
  }


  deleteTodo = () => {
    const { id } = this.props.match.params;

    axios
    .delete(`http://localhost:4000/api/v1/todos/${id}`)
    .then( () => this.props.history.push('/')) // causes Router URL change
    .catch( (err) => console.log(err));
  }
  
  
  render() {
    return (
      <div>
        <h3>TASK DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>


        <button onClick={() => this.deleteTask()}>
    	Delete task
      	</button>

        
      </div>
    )
  }
}

export default DeleteTodo;