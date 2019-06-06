import TodoServices from "../todoServices";
import React, { Component } from 'react';
import AddOne from './AddOne'

class ListTodos extends Component {
  constructor(props){
      super(props);
      this.state = { allTodos: ""};
  }
   
 
  getAll=()=>{
    TodoServices.getAll()
    .then((todos)=>{
      this.setState({allTodos: todos})
    })
  }

  componentDidMount(){
    this.getAll()
  }
 
  render(){
    return(
      <div>
      <AddOne updateList={this.getAll}/>
      {
        this.state.allTodos?
        this.state.allTodos.map((todo)=>{
          return(
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
          )
        })
        :
        <h1>No todos to display yet</h1>
      }
      </div>
    )
  }
}






export default ListTodos;