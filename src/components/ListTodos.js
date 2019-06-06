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

  deleteTodo=(id)=>{
    TodoServices.deleteOne(id)
    .then(()=> this.getAll())
  }

  componentDidMount(){
    this.getAll()
  }
 
  render(){
    return(
      <div className= 'container'>
        <AddOne updateList={this.getAll}/>
        <div className='todos'>
          {
            this.state.allTodos?
            this.state.allTodos.map((todo)=>{
              return(
              <div key={todo._id} className='todo'>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={()=>this.deleteTodo(todo._id)}>X</button>
              </div>
              )
            })
            :
            <h1>No todos to display yet</h1>
          }
        </div>
      </div>
    )
  }
}






export default ListTodos;