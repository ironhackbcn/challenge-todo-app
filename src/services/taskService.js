import axios from 'axios';

class TaskService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    });
  }

  getAllTasks() {
    return this.axios.get('/todos')
      .then(({ data: tasks }) => tasks)
  }

  getSingleTask(id) {
    return this.axios.get(`/todos/${id}`)
      .then(({ data: task }) => task);
  }

  // Data Params: title=[String]
  addTask(body) {
    console.log("hola")
    return this.axios.post('/todos', body)
      .then(({ data: task }) => task);
  }

  // Data Params: title=[String]
  updateTask(task) {
    return this.axios.put(`/todos/${task._id}`, task)
      .then(({ data: task }) => task);
  }

  deleteTask(id) {
    return this.axios.delete(`/todos/${id}`)
      .then(({ data: tasks }) => tasks);
  }

}

const taskService = new TaskService()

export default taskService;