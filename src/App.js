import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import Home from "./Home";

function App() {
  const [todosArray, setTodosArray] = useState([]);



  return (
    <div className="App">
      <Home />
      <NewTodoForm />
      <TodoList list={todosArray} />
    </div>
  );
}

export default App;
