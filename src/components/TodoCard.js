import React from 'react'
import { Link } from 'react-router-dom'

const TodoCard = ({ id, title, body}) => {

  return (
    <article>
        <Link to={`/todos/${id}`}>
        <h4>{title}</h4>
      </Link>
      <h5>{body}</h5>
    </article>
  )
}

export default TodoCard