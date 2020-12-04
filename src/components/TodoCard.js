import React from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ _id, title, body }) => {
  return (
    <div className="todoCard">
      <div className="todoLink">
        <Link to={`/todos/${_id}`}>
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
};

export default TodoCard;
