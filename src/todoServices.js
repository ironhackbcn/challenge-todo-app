import axios from "axios";

class TodoManager {
  constructor() {
    this.todos = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true
    });
  }

  getAll(){
    return this.todos.get("/todos").then(response => response.data);
  }

  getOne(id){
   return this.todos.get(`/todos/${id}`).then( todo => todo.data);
  }

  deleteOne(id){
    return this.todos.delete(`/todos/${id}`)
    .then( (res) => {
        console.log('res',res)
      return res

    } )
    .catch( (err) => console.log(err));
  }

  updateOne(id, updates){
    const {
    title, body } = updates

    return this.todos.put(`/todos/${id}`,
    {
      title, body })
    .then( (response) => {
      return response.data
    })
     .catch( (err) => console.log(err) )
  }
 

  addOne(newTodo){
  
    return this.todos
      .post("/todos", {...newTodo})
    }
  }

const TodoServices = new TodoManager();

  export default TodoServices;