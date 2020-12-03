import axios from "axios";

class Todo {
  constructor() {
    this.todoFunc = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getTodoList() {
    return this.todoFunc.get("/todos").then(({ data }) => data); 
  }

 editTodo(id, title, body) {
    return this.todoFunc.put(`/todos/${id}`, {title, body}).then(({ data }) => data); 
  }

 deleteTodo(id) {
    return this.todoFunc.delete(`/todos/${id}`).then(({ data }) => data); 
  }

  createTodo(title, body) {
    return this.todoFunc.post("/todos", {title, body}).then(({ data }) => data); 
  }

}

const axiosAssoRequestFunctions = new Todo();

export default axiosAssoRequestFunctions;
