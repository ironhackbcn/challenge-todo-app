import React, { Component } from 'react';

class TodoCard extends Component {
  render() {
    const {data: { _id,title,body }, onDelete} = this.props;
    return (
      <div className="todoCard">
        <h1>{title}</h1>
        <p>{body}</p>
        <button>delete todo</button>
      </div>
    );
  }
}

export default TodoCard;