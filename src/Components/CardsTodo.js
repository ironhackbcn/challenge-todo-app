import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardsTodo extends Component {
  render() {
    const { todoList, Delete } = this.props;
    return (
      <div>
        {todoList.length > 0 && (
          <div className="cards-container">
            {todoList.map((todos, index) => {
              return (
                <div className="cardContainer" key={`key is ${index}`}>
                  <Link
                    style={{ color: "black" }}
                    to={{
                      pathname: `/${todos._id}`
                    }}
                  >
                    <p>Title: {todos.title}</p>
                  </Link>
                  <div>
                    <button
                      onClick={() => {
                        Delete(todos._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default CardsTodo;
