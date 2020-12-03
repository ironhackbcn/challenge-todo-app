import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    if (productsList.length === 0) {
      axios.get("http://localhost:4000/api/v1/todos").then((response) => {
        setProductsList(response.data);
      });
    }
  });
  const deleteElement = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        setProductsList([]);
      });
  };

  return (
    <div className="wrap">
    <div class="header"><span>Todo List</span></div>
      <Link style={{color:"red"}} to="/newProduct">
        <button id="add">Add new To do </button>
      </Link>
      {productsList.map((element, index) => {
        return (
          <div>
          <div style={{padding:"20px" }}>
            <span> Title:{element.title}</span>
            </div>
            <div>
            <span> Description:{element.body}</span>
            </div>
            <div className="divbutton ">
            <Link className="" to={`/newProduct/${element._id}`}>
              <button>Edit</button>
            </Link>
            <button className="button" onClick={() => {deleteElement(element._id);}} >Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
