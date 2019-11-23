import React, { Component } from 'react';
import todoService from '../services/todoService';

class UserList extends Component {
  state = {
    tasks: [],
  }

  componentDidMount = () => {
    const tasks = todoService.getAllTodos();
    console.log(tasks);
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="tasks">
        {tasks.map(task => {
          return (
            <div className="task">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          )
        })}
      </div >
    );
  }
}

export default UserList;