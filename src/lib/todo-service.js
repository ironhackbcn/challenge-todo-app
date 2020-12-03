import axios from "axios";

class TodoService {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:4000/api/v1",
        withCredentials: true,
      });
    }
    getAllTodos() {
        return this.axios.get(`/todos`).then(({ data }) => data);
      }

    createTodo = async (todo) => {
        try {
          const res = await this.axios.post(`/todos`, todo);
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };

    getTodo(id) {
    return this.axios.get(`/todos/${id}`).then(({ data }) => data);
    }

    deleteTodo(id) {
        console.log(id, 'id')
    return this.axios.delete(`/todos/${id}`).then(({ data }) => data);
    }

    updateTodo(id, todo) {
        return this.axios.put(`/todos/${id}`, todo).then((data) => data)
    }
}
  
  const axiosRequestFunctions = new TodoService();
  
  export default axiosRequestFunctions;