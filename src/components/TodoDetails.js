import React, { Component } from 'react';
import axios from 'axios';
import UpdateTodo from '../components/UpdateTodo';

class TodoDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleTodo();
  }

  getSingleTodo = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( responseFromApi =>{
      const theTodo = responseFromApi.data;
      this.setState(theTodo);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleTodo();
    } else {
      //{...props} => so we can have 'this.props.history' in Edit.js
      return (
        <UpdateTodo theTodo={this.state} getTheTodo={this.getSingleTodo}
          {...this.props}
        />
      );
    }
  };

  deleteTodo = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/');

    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    const { title, body} = this.state
    return(
      <div className="details-block">
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        <button className="delete" onClick={() => this.deleteTodo()}>Delete</button> 
        <h1>{title}</h1>
        <p>{body}</p>
        <div>{this.renderEditForm()} </div>
        <br/>
      </div>
    )
  }
}

export default TodoDetails;