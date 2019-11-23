import axios from 'axios';

class TodoService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
      withCredentials: true
    })
  }

  getAllTodos() {
    return this.axios.get('/api/v1/todos').then(response => response.data);
  }

  getOneTodo(id) {
    return this.axios.get(`/api/v1/todos/${id}`).then(response => response.data);
  }

  deleteOneTodo(id) {
    return this.axios.delete(`/api/v1/todos/${id}`).then(response => response.data);
  }

  editOneTodo(id) {
    return this.axios.put(`/api/v1/todos/${id}`).then(response => response.data);
  }

  postTodo(task) {
    const { body, title } = task;
    return this.axios.post('/api/v1/todos', { body, title }).then(response => response.data);
  }
}

const todoService = new TodoService();

export default todoService;