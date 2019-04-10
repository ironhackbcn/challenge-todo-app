import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    })
  }

  createTodo(body) {
    return this.api.post('/todos', body)
    .then(({ data }) => data)
  }

  listTodos() {
    return this.api.get('/todos')
    .then(({ data }) => data)
  }

  deleteTodo(id) {
    return this.api.delete(`/todos/${id}`)
    .then(({ data }) => data)
  }
}

const apiService = new ApiService();

export default apiService;