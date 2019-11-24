import axios from "axios";

class TodoService {
  constructor() {
    this.todo = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_BASE_URL
    });
  }

  async getAllTodo() {
    const todoList = await this.todo.get("/api/v1/todos");
    return todoList;
  }

  async createTodo(title, body) {
    try {
      const data = await this.todo.post("/api/v1/todos", { title, body });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getDetailTodo(id) {
    try {
      const data = await this.todo.get(`/api/v1/todos/${id}`);
      const { data: todoDetail } = data;
      return todoDetail;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTodo(id) {
    try {
      const data = await this.todo.delete(`/api/v1/todos/${id}`);
      const { data: todoDetail } = data;
      return todoDetail;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTodo(title, body, id) {
    try {
      const data = await this.todo.put(`/api/v1/todos/${id}`, { title, body });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
const todoService = new TodoService();

export default todoService;
