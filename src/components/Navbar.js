import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
              Home
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/createTodos" style={{ textDecoration: "none" }}>
            Create New Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;