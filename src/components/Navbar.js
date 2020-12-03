import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            <div>
                <Link to='/addTask'>
                    <a className="addTask">Add new task</a>
                </Link>
                {/* <Link to='/allTasks'>
                    <a className="allTasks">Show all tasks</a>
                </Link> */}
            </div>
        </nav>
    );
  }
};

export default Navbar;
