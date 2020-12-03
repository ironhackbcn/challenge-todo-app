import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function List() {

  const [todosList, setTodosList] = useState([]);


  useEffect(() => {
    if (todosList.length === 0) {
      axios.get("http://localhost:4000/api/v1/todos").then((response) => {
        setTodosList(response.data);
      });
    }
  });


  const deleteElement = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        setTodosList([]);
      });
  };


  return (
    <div>
      <div id="myDIV" class="header">
  <h2>My To Do List</h2> 
</div>
      {todosList.map((element, index) => {
        return (
          <div style={{margin: "10px"}}>
          <ul id="myUL">
            <li><span>{element.title}</span> <br></br></li>
            <span>{element.body}</span><br></br>
            </ul>
            <Link to={`/newTodo/${element._id}`}>
              <button className="addBtn">Edit</button>
            </Link>
            <button className="addBtn" onClick={() => {deleteElement(element._id)}}>Delete</button><br></br>
          </div>
        )

      })}
      <Link to="/newTodo">
        <button className="addBtn2">Add</button>
      </Link>
<div className = "Xmas">
      <div className="text2">🎅</div>
<div className="text2">🎄</div>
<div className="text2">🎁</div>
</div>
    </div>
  );
}
export default List;