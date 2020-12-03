import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import EditTodo from './Edit';

class TodoDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
      this.getSingleTodo();
    }
    
    componentWillUnmount() {
      this.setState = (state, callback) => {
        return;
      };
    }
  
    getSingleTodo = () => {
      const { params } = this.props.match;
      axios
        .get(`http://localhost:4000/api/v1/todos/${params.id}`)
        .then(responseFromApi => {
          const theTodo = responseFromApi.data;
          this.setState(theTodo);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    renderEditForm = () => {
      if(!this.state.title){
        this.getSingleTodo();
      } else {
        return <EditTodo theTodo={this.state} getTheTodo={this.getSingleTodo} {...this.props} />
      }
}

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
    console.log(this.state, 'el state')
  return(
      
    <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.body}</p>
      <div>{this.renderEditForm()} </div>
      <button onClick={() => this.deleteTodo()}>Delete</button> 
      <br/>

      <Link to={'/'}>Back to my list</Link>
    </div>
  )
}
}

export default TodoDetails;