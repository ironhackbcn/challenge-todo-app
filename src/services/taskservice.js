import axios from "axios";

class TaskService {
  constructor() {
    this.task = axios.create({
      baseURL: `http://localhost:4000/api/v1`,
      withCredentials: true,
    });
  }

  getAllTasks() {
    const pr = this.task.get("/todos").then(({ data }) => data);
    return pr;
  }

  getTask(taskId) {
    const pr = this.task.get(`todos/${taskId}`).then(({ data }) => data);
    return pr;
  }

  createTask(title, body) {
    const pr = this.task
      .post("/todos", { title, body })
      .then(({ data }) => data);
    return pr;
  }

  updateTask(taskId, title, body) {
    const pr = this.task
      .put(`/todos/${taskId}`, { title, body })
      .then(({ data }) => data);
    return pr;
  }

  deleteTask(taskId) {
    const pr = this.task.delete(`/todos/${taskId}`).then(({ data }) => data);
    return pr;
  }
}

const taskService = new TaskService();
export default taskService;
