import React, { Component } from 'react';
import axios from 'axios';
import Create from './../Create/Create'

 class List extends Component {

    state = {
        todoList: []
      };
      
      getTodoList = () => {
        axios.get('http://localhost:4000/api/v1/todos')
        .then((response) => {
          const { lists } = response
          this.setState( { todoList: lists } )
        })
        .catch((err) => console.log(err))
      }
      
    handleDelete=(id)=>{
        axios.delete('http://localhost:4000/api/v1/todos/${id}')
        .then(()=>{
         this.getTodoList()

        })
        .catch((err) => console.log(err))
    }



      componentDidMount() {
        this.getTodoList()
      }

    render() {
        console.log(this.state)
        return (
            
            <div>
            <Create />

            {this.state.todoList ? (
             <div>
             {this.state.todoList.map((item)=>(
                   <div>
                     <p>{item.title}</p>
                     <p>{item.body}</p>
                     <button onClick={() => { this.handleDelete(item._id) }}>Delete</button>
                   </div>
                ))}

             </div>


                ) : (<div>You have no lists</div>)}
                
            </div>
        )
    }
}


export default List
