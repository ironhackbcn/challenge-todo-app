import axios from 'axios';

class TodoService {
    constructor() {
      this.todo = axios.create({
        baseURL: 'http://localhost:4000/api/v1',
      });
    }
  
    getAllTodos() {
      return this.todo.get("/todos").then(response => response);
    }
  
    createTodo(newTodo) {
      return this.todo.post("/todos", newTodo).then(response => response);
    }
  
    getTodo(id) {
      return this.todo.get(`/todos/${id}`).then(response => response);
    }
  
    updateTodo(id, updateTodo) {
      return this.todo
        .put(`/todos/${id}`, updateTodo)
        .then(response => response);
    }
  
    deleteTodo(id) {
      return this.todo.delete(`/todos/${id}`).then(response => response);
    }
  }
  
  const todoService = new TodoService();
  
  export default todoService;