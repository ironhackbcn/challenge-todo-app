import axios from "axios";

class TodosService {
  constructor() {
    this.todos = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true,
    });
  }

  getAllTodos = async () => {
    try {
      let response = await this.todos.get("/todos");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  createToDo = async () => {
    try {
      let response = await this.todos.post("/todos");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };


deleteToDo = async (id) => {
    try {
      let response = await this.todos.delete("/todos/:id");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

}
const todosService = new TodosService();

export default todosService;
