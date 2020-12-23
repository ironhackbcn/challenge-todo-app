import React, { Component } from "react";
import "./TaskListItem.css";
import Checkbox from "../Checkbox/Checkbox";
import { Link } from "react-router-dom";

class TaskListItem extends Component {
  state = {
    isDone: false,
  };

  onChangeStatus = (event) => {
    const { checked } = event.target;
   this.props.updateTaskStatus(this.props.oneItem._id, checked)
  };

  render() {
    return (
      <div key={this.props.oneItem._id} className="card">
        <Checkbox onChange={(event) => this.onChangeStatus(event)} isDone={this.props.oneItem.isDone} />
        <Link to={`todos/${this.props.oneItem._id}`}>
          <h4 className="title-list">{this.props.oneItem.title}</h4>
        </Link>
      </div>
    );
  }
}
export default TaskListItem;
