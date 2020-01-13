
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddTodo from '../components/AddTodo';

class TodoList extends Component {
	state = { 
    listOfTodos: [] 
  };

  getAllTodos= () => {
    axios.get(`http://localhost:4000/api/v1/todos`)
    .then((apiResponse) => {
      this.setState({ listOfTodos: apiResponse.data })
    })
  }

  deleteTodo = (id) => {
    console.log("to delete this id",id);
    
    
    axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
        .then( () =>
        
        {    const newArr = this.state.listOfTodos.filter((el) => {
                return el._id !== id
            })
            this.setState({
                listOfTodos: newArr
            })
        }) 

    	.catch( (err) => console.log(err));
        }

  componentDidMount() {
   
    this.getAllTodos();  
  }

  render() {
    const { listOfTodos } = this.state;

    return(
      <div>     

        <h1>todo list</h1>
        <AddTodo getData={this.getAllTodos} /> 
        
        <div className="todolist">
          { 
            listOfTodos.map( (todo) => {
            return (
              <div key={todo._id} className='todocard'>
               
                  <h3>{todo.title}</h3>
                  <p>{todo.body} </p>
                  <button className="DeleteButton"  onClick={() =>this.deleteTodo(todo._id)}>
                     Delete
                  </button>
                 <Link to={`/todos/${todo._id}`}> 
                    <button>Edit</button>
                </Link> 
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default TodoList;