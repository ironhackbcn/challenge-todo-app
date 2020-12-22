import React, { Component } from 'react'
import TaskListItem from "./TaskListItem"
import { Link } from "react-router-dom";

class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.eachTask.map((eachTask, index) => {
          return (
            <Link key={eachTask._id} to={`todos/${eachTask._id}`}>
              <TaskListItem key={index} oneItem={eachTask} />
            </Link>
          )
        })}
      </ul>
    )
  }
}

export default TaskList
