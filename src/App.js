import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Home from "./Home";

function App() {
  const [todosArray, setTodosArray] = useState([]);

  return (
    <div className="App">
      <Home />
      <TodoList list={todosArray} />
    </div>
  );
}

export default App;
