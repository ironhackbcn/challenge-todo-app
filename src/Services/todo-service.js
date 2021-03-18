import axios from "axios";

class TodoService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,
    });
  }

  getAllTodos = () => {
    const pr = this.api.get("/todos").then(({ data }) => data);
    return pr;
  };

  getOneTodo = (id) => {
    const pr = this.api.get(`/todos/${id}`).then(({ data }) => data);
    return pr;
  };

  createTodo = ({ title, body }) => {
    const pr = this.api.post("/todos", { title, body });
    return pr;
  };

  deleteTodo = (id) => {
    const pr = this.api
      .delete(`/todos/${id}`)
      .then((response) => response.data);
    return pr;
  };
}

const todoService = new TodoService();
export default todoService;
