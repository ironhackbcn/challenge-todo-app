import axios from 'axios';

class TodoService{
    constructor(){
        this.todoApi= axios.create({
            baseURL: 'http://localhost:4000/api/v1'
        })
    }
    getAllTodos = async()=>{
        try{
            const todos= await this.todoApi.get('/todos')
            return todos.data
        } catch(error){
            console.log(error)
        }
    }

    getOneTodo = async(todoId)=>{
        try{
            const oneTodo = await this.todoApi.get(`/todos/${todoId}`)
            return oneTodo.data
        } catch(error){
            console.log(error)
        }
    }


    createTodo = async(newTodo) =>{
        const { title, body } = newTodo;
        try{
            const createOneTodo= await this.todoApi.post('/todos', {title,body})
            return createOneTodo.data
        } catch(error){
            console.log(error)
        }
    }
    updatedTodo = async (todoId, editedTodo) =>{
        try{
            const updatedTodo = await this.todoApi.put(`/todos/${todoId}`, editedTodo)
            return updatedTodo.data
        }
        catch(error){
            console.log(error)
        }
    }
    deleteTodo= async(todoId)=>{
       return this.todoApi.delete(`/todos/${todoId}`)
       .then(response=>response.data)
    }

}

const todoService = new TodoService ()
export default todoService