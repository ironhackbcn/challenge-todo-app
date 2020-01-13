import React, { Component } from "react";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.title
    };
  }
  render() {
    return (
      <div>
        <h1>title: {this.props.title}</h1>
      </div>
    );
  }
}

export default TodoCard;
