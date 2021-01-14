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

  
  }
  
  const todoService = new TodoService();
  
  export default todoService;