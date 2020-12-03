import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default function NewProduct(props) {
  const [canRedirect, setCanRedirect] = useState(false);
  const [product, setProduct] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    if (id && Object.keys(product).length === 0) {
      axios.get(`http://localhost:4000/api/v1/todos/${id}`).then((response) => {
        setProduct(response.data);
      });
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:4000/api/v1/todos/${id}`, product)
        .then((response) => {
          setCanRedirect(true);
        });
    } else {
      axios
        .post("http://localhost:4000/api/v1/todos", product)
        .then((response) => {
          setCanRedirect(true);
        });
    }
  };

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {canRedirect && <Redirect to="/" />}
      <form  className="wrap" onSubmit={handleSubmit}>
      <div class="header"><span>Todo List</span></div>
        <div style={{padding:"20px" }}>
          <label>Title:</label>
          <input
            type="text"
            value={product.title}
            onChange={handleChange}
            name="title"
          ></input>
        </div>
        <div style={{padding:"20px" }}>
          <label>Description:</label>
          <input
            type="text"
            value={product.body}
            onChange={handleChange}
            name="body"
          ></input>
        </div>
        <button className="button"> Save</button>
      </form>
    </>
  );
}
