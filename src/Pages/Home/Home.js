import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to your TODO lists</h2>
      <Link to={"/todos/new"}>
        <button>Add a new Todo</button>
      </Link>

      <Link to={"/todos/all"}>
        <button>View all Todos</button>
      </Link>
    </div>
  );
}

export default Home;
