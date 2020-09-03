import React, { Component } from 'react'
import todoService from '../service/todoService'

import TodoCard from './TodoCard';

 class DoneTodos extends Component {
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
            const filteredTodos = reverseResponse.filter(todo => {
                if(todo.done === 'true'){    
                    return todo
                }
            })
           this.setState({ todosCopy: filteredTodos});
        })
        .catch(err => {
            console.log("Error DoneTodos.js", err);
        });
        }

    render() {

        const { todosCopy} = this.state

        return (
            <div className='todos-container'>
                <h1 className='done'>Done</h1>
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

export default DoneTodos