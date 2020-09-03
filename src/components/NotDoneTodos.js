import React, { Component } from 'react'
import todoService from '../service/todoService'

import TodoCard from './TodoCard';

//renderiza los todos que aun no están completados

 class AllTodos extends Component {
     _isMounted = false;

     state={
         todos: null,
         todosCopy: null
     }
     componentDidMount(){
        this._isMounted = true
        todoService.getAllTodos()
        .then(response => {
            const reverseResponse = response.reverse()
            const filteredTodos = reverseResponse.filter(todo =>{
               // console.log(todo)
                if(todo.done === 'false'){    
                    return todo
                }
            })
           // console.log(filteredTodos)
           this.setState({ todosCopy: filteredTodos});
        })
        .catch(err => {
            console.log("Error finding todos ", err);
        });
        }

    render() {

        const { todosCopy} = this.state
       // console.log(todos)

        return (
            <div className='todos-container'>
                <h1 className='not'>NOT DONE :(</h1>

                {
                    todosCopy ?
                    todosCopy.map((todo, index)=>{
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