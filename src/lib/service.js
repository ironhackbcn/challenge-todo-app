import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:4000`, //usually hidden in .env
      withCredentials: true,
    });
  }

//   Links between front and back created

  getAllToDoes() {
    return this.service.get("/api/v1/todos").then(({ data }) => data); 
  }

  addNewToDo(title, body) {
    return this.service.post("/api/v1/todos", { title, body }).then(({ data }) => data);
  }

  getToDo(id) {
    return this.service.get(`/api/v1/todos/${id}`).then(({ data }) => data); 
  }

  editToDo(id, title, body) {
    return this.service.put(`/api/v1/todos/${id}`, { title, body }).then(({ data }) => data);
  }

  deleteToDo(id) {
    return this.service.delete(`/api/v1/todos/${id}`).then(({ data }) => data);
  }
}

const axiosFunctions = new Service();

export default axiosFunctions;
