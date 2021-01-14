import React from "react";
import axios from "axios";
import "./TodoCard.css";

class TodoCard extends React.Component {
  deleteItem = () => {
    const id = this.props.todo._id;
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then((response) => {
        console.log("item deleted succesfully");
        this.props.renderTodos();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="todo-card">
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.body}</p>
        <i className="fas fa-trash" onClick={this.deleteItem}></i>
      </div>
    );
  }
}

export default TodoCard;
