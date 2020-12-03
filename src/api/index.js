import axios from "axios";

const url = "http://localhost:4000/api/v1/todos";

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (id, updateTodo) =>
  axios.put(`${url}/${id}`, updateTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
