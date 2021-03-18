import axios from "axios";

class TodoService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,
    });
  }

  // Create Todo
  createTodo = (title, body) => {
      console.log("reaching here");
      console.log(title, 'title |', body, "body");
      
      
    const pr = this.api
      .post("/todos", { title, body })
      .then((response) => console.log(response)
      );
    return pr;
  };

  // See All Todo
  seeAllTodos = () => {
    const pr = this.api.get("/todos").then((response) => response.data);
    return pr;
  };

  // See One Todo
  seeOneTodo = (id) => {
    const pr = this.api.get(`/todos/${id}`).then((response) => response.data);
    return pr;
  };

  // Update Todo
  updateTodo = (id, changes) => {
    const { title, body } = changes;
    const pr = this.api
      .put(`todos/${id}`, { title, body })
      .then((response) => response.data);
    return pr;
  };

  // Delete Todo
  deleteOneTodo = (id) => {
    const pr = this.api.delete(`todos/${id}`).then((response) => response.data);
    return pr;
  };
}

const todoService = new TodoService(); 
export default todoService; 
