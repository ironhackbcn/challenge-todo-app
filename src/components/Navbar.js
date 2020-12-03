import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to="/new-task">
        New Task
      </Link> <br/>
      <Link to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;