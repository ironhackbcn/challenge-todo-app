import axios from 'axios';

class TodoService {
    constructor() {
        this.todo = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
        });
    }

    async getAllTodos() {
        return this.todo.get('/todos')
            .then(({ data: todos }) => todos);
    }

    // async addNewTodo(todo){
    //     return this.todo.post('/todos', todo)
    //         .then(({ data: todo }) => todo);
    // }

    async addNewTodo(body){
      return this.todo.post('/todos', body)
          .then(({ data: todo }) => todo);
  }
}

const todoService = new TodoService()

export default todoService;