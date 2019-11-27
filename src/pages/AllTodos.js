import React, { Component } from 'react'
import todoService from '../service/todoService'
import {Link} from 'react-router-dom'
import TodoCard from '../components/TodoCard';

 class AllTodos extends Component {
     _isMounted = false;

     state={
         todos: null
     }
     componentDidMount(){
        this._isMounted = true
        todoService.getAllTodos()
        .then(response => {
          //  console.log(response)
           this.setState({ todos: response});
        })
        .catch(err => {
            console.log("Error finding todos ", err);
        });
        }

    render() {

        const {todos} = this.state
       // console.log(todos)

        return (
            <div>
                This is all todos list view
                <Link to='/create'>Add a new Todo</Link>

                {
                    todos?
                    todos.map((todo, index)=>{
                        return (
                            < TodoCard todo= {todo} key = {index}/>
                        )
                    }) : <p>Loading...</p>
                }

            </div>
        )
    }
}

export default AllTodos 