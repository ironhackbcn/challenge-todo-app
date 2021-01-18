import axios from "axios";

class TodoService {
    constructor() {
      
      this.api = axios.create({        
        baseURL: `http://localhost:4000/api/v1`,
        withCredentials: true
      });
    }

    createTodo = (title, body) => {
        const pr = this.api.post('/todos', {title, body});
        return pr;
    }

    getAllTodos = () => {
        const pr = this.api.get('/todos');
        return pr;
    }

    editTodo = (id, title, body) => {
        const pr = this.api.put(`/todos/${id}`, {title, body})
        return pr;
    }

    deleteTodo = (id) => {
        // router.delete('/todos/:id', TodoController.deleteTodo);
        const pr = this.api.delete(`/todos/${id}`);
        return pr;
    }

  
  }
  
  const todoService = new TodoService();
  
  export default todoService;