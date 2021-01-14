import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todosArray, setTodosArray] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/todos`).then((res) => {
      let data = res.data;
      setTodosArray(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/v1/todos`, {
        title: title,
        body: body,
      })
      .then((res) => {
        setTodosArray([...todosArray, res.data]);
      })
      .catch((err) => console.log(err));
    setTitle("");
    setBody("");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/api/v1/todos/${id}`).then(() => {
      axios.get(`http://localhost:4000/api/v1/todos`).then((res) => {
        let data = res.data;
        setTodosArray(data);
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Todo to List</button>
      </form>

      {todosArray.map((item) => {
        return (
          <div key={item._id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <p>{item._id}</p>
            <button onClick={(e) => handleDelete(e, item._id)}>
              delete me
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
