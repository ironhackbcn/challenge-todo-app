import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
        <ul>
            <li>Home</li>
            <li>Create ToDo</li>
            <li>ToDo List</li>
        </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
