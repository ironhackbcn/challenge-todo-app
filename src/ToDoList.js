import React from 'react'

function ToDoList() {
      const [input, setInput] = useState('')
      return (
           <form className = 'todo-list'>
            <input 
            type = 'text' 
            placeholder = 'add task' 
            value = {input}
            name="text"
            className='todo-input'
            />      
            <button className= 'todo-button'>Add task</button>     
            </form>
      )
}

export default ToDoList
