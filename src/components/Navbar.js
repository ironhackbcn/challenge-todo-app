import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            <div>
                <Link to='/allTask'>
                    <h1>Tasks list</h1>
                </Link>     
                <Link to='/addTask'>
                    <h1>Add new task</h1>
                </Link>
            </div>
        </nav>
    );
  }
};

export default Navbar;
