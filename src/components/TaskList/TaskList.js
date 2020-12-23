import React, { Component } from "react";
import TaskListItem from "./TaskListItem";

class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.eachTask.map((eachTask, index) => {
          return (
            <TaskListItem
              key={index}
              oneItem={eachTask}
              updateTaskStatus={this.props.updateTaskStatus}
            />
          );
        })}
      </ul>
    );
  }
}

export default TaskList;
