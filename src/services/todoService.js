import axios from 'axios';

class TodoService {
  constructor() {
    this.api = axios.create({
      baseURL:'http://localhost:4000/api/v1/todos'
    })
  }

  getAllTodos() {
    return this.api.get('/')
     .then(({data}) => data)
  }
  
  createTodo(body) {
    return this.api.post('/', body)
      .then(({data}) => data)
  }

  deleteTodo(id) {
    return this.api.delete('/')
      .then(({data}) => data)
  }

}

const todoService = new TodoService();
export default todoService;
