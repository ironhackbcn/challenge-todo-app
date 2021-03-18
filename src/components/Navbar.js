import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <li>
          <Link to="/">CREATE A TASK</Link>
        </li>
        <li>
          {" "}
          <Link to="/todos">TASKS LIST</Link>
        </li>
      </nav>
    </div>
  );
}
