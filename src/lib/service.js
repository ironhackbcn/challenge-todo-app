import axios from "axios";

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,
    });
  }

  getTodos = async () => {
    try {
      const res = await this.todo.get("/todos");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addTodo = async(title, body) => {
    try {
        const res = await this.todo.post("/todos", {title, body});
        return res.data;
    } catch (error) {
        console.log(error);
    }
  }

  getTodo = async (id) => {
    try {
      const res = await this.todo.get(`/todos/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  editTodo = async (id, title, body) => {
    try {
      const res = await this.todo.put(`/todos/${id}`, {title, body});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteTodo = async (id) => {
    try {
      const res = await this.todo.delete(`/todos/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Todo();

export default axiosRequestFunctions;