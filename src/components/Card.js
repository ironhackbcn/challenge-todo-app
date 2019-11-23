import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = props => {
  const { title, done, body, id } = props;
  return (
    <div className="Card">
      <div className="link">
        <Link to={`/todos/${id}`}>{title}</Link>
      </div>
      <h3>{done}</h3>
      <p>{body}</p>
      <input
        type="checkbox"
        onChange={() => props.check(id)}
        checked={props.atribute}
      ></input>
      <button className="button" onClick={() => props.delete(id)}>Delete</button>
    </div>
  );
};

export default Card;
