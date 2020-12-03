import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
     <nav className="navbar">
        <ul>
          <Link to='/'>
            <li>Add new</li>
          </Link>
          <Link to='/list'>
            <li>See all</li>
          </Link>      
        </ul>
      </nav>
  );
}


export default Navbar;
