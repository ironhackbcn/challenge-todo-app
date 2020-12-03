import axios from "axios";

class Tasks {
  constructor() {
    this.tasks = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  createTodo({title, description}) {
    
    return this.tasks
      .post("/api/v1/todos", {title, description})
      .then(({ data }) => data);
  }

  updateTodo({title, description, id}) {

    
    return this.tasks.put(`/api/v1/todos/${id}`, {title, description})
    .then(({ data }) => data);
  }

  deleteTodo(id) {
    
    return this.tasks.delete(`/api/v1/todos/${id}`)
    .then(({ data }) => data);
  }

  getAllTodos(){
   
    return this.tasks.get(`/api/v1/todos`).then(({ data }) => data);
 }

 getTodo(id) {
    
    return this.tasks.get(`/api/v1/todos/${id}`)
    .then(({ data }) => data);
  }



  
}

const axiosRequestFunctions = new Tasks();

export default axiosRequestFunctions;
