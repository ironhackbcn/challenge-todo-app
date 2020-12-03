import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,  
    });
  }

  createTodo({title, body}){
      return this.auth
      .post("/todos", {title, body})
      .then(({ data }) => data)
  }

  allTodos(){
      return this.auth
      .get("/todos", {})
      .then(({ data }) => data)
  }

  deleteTodo(id){
      return this.auth
      .delete(`/todos/${id}`, {id})
      .then(({ data }) => data)
  }

  editTodo({ id, title, body }){
      return this.auth
      .put(`/todos/${id}`, {id, title, body})
      .then(({ data }) => data)
  }

  todoDetails(id){
      return this.auth
      .get(`/todos/${id}`, {id})
      .then(({ data }) => data)
  }

}

const axiosRequestFunctions = new Auth(); 

export default axiosRequestFunctions;