// Import all from api file

import * as api from "../api";

// * Actions Creators
// Functions that returns actions

export const getAllTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodos();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = api.updateTodo(id, todo);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
