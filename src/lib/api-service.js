import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,
    });
  }

  getAllTodos = () => {
    const pr = this.api.get("/todos");
    return pr;
  };

  deleteTodo = (id) => {
    const pr = this.api.delete(`/todos/${id}`);
    return pr;
  };

  createTodo = (title, description) => {
    const pr = this.api.post(`/todos`, {
      title,
      "body":description
    });

    return pr;
  };

  updateTodo = (id,title,description)=>{
      const pr=this.api.put(`/todos/${id}`,{
          title,
          "body":description
      })

      return pr;
  }
}

const apiService = new ApiService();
export default apiService;
