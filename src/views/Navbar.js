import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks to fullfill</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add a task</NavLink>
        </li>
      </nav>
    );
  }
}
export default Navbar;