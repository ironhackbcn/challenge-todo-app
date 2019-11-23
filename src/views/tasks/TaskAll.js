import React, { Component } from 'react';
import taskService from '../../services/taskService';
import { Link } from 'react-router-dom';

class TaskAll extends Component {
  state = {
    tasks: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const tasks = await taskService.getAllTasks()
      this.setState({
        tasks,
        loading: false
      })
    } catch (error) { }
  }

  render() {
    const { tasks, loading } = this.state;

    return (
      <>
        <h1>Roll up your sleeves and work hard! These are your tasks:</h1>
        {!loading && tasks.map((task) => {
          return (
            <div key={task._id}>
              <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            </div>
          )
        })}
        {loading && <div>loading...</div>}
      </>
    );
  }
}

export default TaskAll;