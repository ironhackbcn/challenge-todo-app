import axios from 'axios';

class TodoService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    });
  }
  // crear To Do
  createTodo(title) {
    return this.axios.post('/todos', { title }).then(({ data }) => data);
  }

  // listar To Do
  getAllTodo(title) {
    return this.axios.get('/todos', { title }).then(({ data }) => data);
  }
}

const toDoService = new TodoService();

export default toDoService;

// router.get('/todos', TodoController.getAllTodos);
// router.get('/todos/:id', TodoController.getTodo);
// router.post('/todos', TodoController.createTodo);
// router.put('/todos/:id', TodoController.updateTodo);
// router.delete('/todos/:id', TodoController.deleteTodo);
