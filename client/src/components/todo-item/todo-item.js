import React, { Component } from "react";
import "./style.css";
class ToDoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="toDoItemBox">
        <div>
          <div>
            <div className="toDoItem">
              <h3>{item.title}</h3>
            </div>
            <div className="toDoItem">
              <h3>{item.body}</h3>
            </div>
          </div>
        </div>
        <div className="toDoItemBtn">
          <button onClick={() => this.props.deleteItem(item._id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
