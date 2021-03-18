import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/todos/all"}>
        <p>All Todos</p>
      </Link>
      <Link to={"/todos/new"}>
        <p>New Todo</p>
      </Link>
    </nav>
  );
}

export default NavBar;
