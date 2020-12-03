import axios from "axios";

class Todo {
  constructor() {
    this.funcionToDo = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getTodoList() {
    return this.funcionToDo.get("/todos").then(({ data }) => data); 
  }

 editTodo(id, title, body) {
    return this.funcionToDo.put(`/todos/${id}`, {title, body}).then(({ data }) => data); 
  }

 deleteTodo(id) {
    return this.funcionToDo.delete(`/todos/${id}`).then(({ data }) => data); 
  }

  createTodo(title, body) {
    return this.funcionToDo.post("/todos", {title, body}).then(({ data }) => data); 
  }

}

const axiosRequestFuncion = new Todo();

export default axiosRequestFuncion;