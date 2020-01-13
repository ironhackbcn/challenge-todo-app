import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className='nav-style'>
  <ul>
    <li>
      <Link to={'/todos'} >
        TODOS
      </Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;