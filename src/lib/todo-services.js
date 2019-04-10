import axios from 'axios';


class TodoService {
  constructor() {
    this.todos = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  create(data) {
    const { title, body, isDone  } = data;
    return this.todos.post('/todos', { title, body })
      .then(({ data }) => data);
  }
  // Llama a la Api para recogeger todos los 'todos'
  getAll() {
    return this.todos.get('/todos')
      .then(({ data }) => data);
  }

  deleteOne(id) {
    return this.todos.delete(`/todos/${id}`)
      .then(({ data }) => data);
  }

  edit(id,data) {
    const { title, body } = data;
    return this.todos.put(`/todos/${id}`, { title, body })
      .then(({ data }) => data);
  }
}


const todoService = new TodoService();

export default todoService;