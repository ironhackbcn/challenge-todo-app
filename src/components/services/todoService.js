import axios from "axios";

class TodoService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.TODO_BACKEND_BASE_URL || "http://localhost:4000/api/v1",
      withCredentials: true
    });
  }

  getAllTodos() {
    return this.axios.get("/todos").then(({ data: todos }) => todos);
  }

  getAllDones() {
    return this.axios.get("/dones").then(({ data: todos }) => todos);
  }

  getTodo(id) {
    return this.axios.get(`/todos/${id}`).then(({ data: todos }) => todos);
  }

  createTodo(newTodo) {
    const { title, body } = newTodo;
    return this.axios
      .post(`/todos`, { title, body })
      .then(({ data: todo }) => todo);
  }

  updateTodo(todo) {
    return this.axios.put(`/todos/${todo._id}`, todo).then(({ data: todo }) => todo);
  }

  deleteTodo(id) {
    return this.axios.delete(`/todos/${id}`).then(({ data: todo }) => todo);
  }

}

const todoService = new TodoService();

export default todoService;
