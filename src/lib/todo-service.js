import axios from "axios";

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true
    });
  }

  createTodo(todo) {
    return this.todo
      .post("/todos", todo)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }

  getAllTodo() {
    return this.todo
      .get("/todos")
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }

  getMyTodo(id) {
    return this.todo
      .get(`/todos/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }

  deleteTodo(id) {
    return this.todo
      .delete(`/todos/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }

  updateTodo(id) {
    return this.todo
      .put(`/todos/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }
}

const todoService = new Todo();

export default todoService;
