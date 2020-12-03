import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Todo from './Todo'

async function addTodo(title, body){
    axios.post("http://localhost:4000/api/v1/todos", {title, body})
  }
   
function AllTodos() {
    useEffect(()=>{
        getAllTodos()
       },[])
    
      const [todoArr, setTodoArr] = useState([])
      const [title, setTitle] = useState('')
      const [body, setBody] = useState('')
    
      function getAllTodos(){
        axios.get("http://localhost:4000/api/v1/todos").then(({ data }) => {
            console.log(data);
          setTodoArr(data)
        }).catch(err=>{console.log(err);});
      }
    
      function handleChangeTitle(e){
        setTitle(e.target.value)
      }

      function handleChangeBody(e){
        setBody(e.target.value)
      }
    
      function handleSubmit(e){
        e.preventDefault();
        addTodo(title, body);
        getAllTodos();
      }

    return (
        <div>
            <div>
                {todoArr.map((todo, ind)=>{
                    console.log(todo)
                    return (<Todo key={ind} title={todo.title} body={todo.body} id={todo._id} getAllTodos={getAllTodos}/>)
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' value={title} onChange={handleChangeTitle} />
                <input type='text' name='body' value={body} onChange={handleChangeBody} />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default AllTodos
