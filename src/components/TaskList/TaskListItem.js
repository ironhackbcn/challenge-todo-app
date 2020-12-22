import React, { Component } from "react";
import "./TaskListItem.css"

class TaskListItem extends Component {
  render() {
    return (
      <div key={this.props.oneItem._id} className="card">
        <h4 className="title-list">{this.props.oneItem.title}</h4>
      </div>
    );
  }
}
export default TaskListItem;
