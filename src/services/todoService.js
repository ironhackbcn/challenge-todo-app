import axios from 'axios';

class TodoService {
  constructor() {
    this.todo = axios.create({
      // baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    });
  }

  getAllTodos() {
    return this.todo.get('/todos')
      .then(({ data: todos }) => todos);
  }

  addNewTodo(body) {
    return this.todo.post('/todos', body)
      .then(({ data: todo }) => todo);
  }

  removeToDo(id) {
    return this.todo.delete(`/todos/${id}`)
      .then(({ data: todo }) => todo);
  }

  updateTodo(id, body) {
    return this.todo.put(`/todos/${id}`, body)
      .then(({ data: todo }) => todo);
  }

  getOneTodo(id) {
    return this.todo.get(`/todos/${id}`)
      .then(({ data: todo }) => todo);
  }
}

const todoService = new TodoService()

export default todoService;