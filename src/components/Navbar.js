import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className = "navbar">
      <li><Link to="/">Create Todo</Link></li>
      <li> <Link to="/todos">List of todos</Link></li>
    </div>
  )
}
