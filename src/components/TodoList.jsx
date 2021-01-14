import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todosArray, setTodosArray] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/todos`).then((res) => {
      let data = res.data;
      setTodosArray(data);
    });
  }, []);

  const toggleShowUpdate = (e) => {
    e.preventDefault();
    setShowUpdate(!showUpdate);
  };

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

  const handleUpdate = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/v1/todos/${id}`, { title, body })
      .then((res) => {
        axios.get(`http://localhost:4000/api/v1/todos`).then((res) => {
          let data = res.data;
          setTodosArray(data);
        });
      });
    setTitle("");
    setBody("");
    setShowUpdate(false);
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
            <button onClick={toggleShowUpdate}>Update</button>
            {showUpdate ? (
              <form onSubmit={(e) => handleUpdate(e, item._id)}>
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
                <button type="submit">update item</button>
              </form>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
