import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Home />
      <TodoList />
    </div>
  );
}

export default App;
