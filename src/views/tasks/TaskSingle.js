import React, { Component } from 'react';
import taskService from '../../services/taskService';
import { Link } from 'react-router-dom';
import TaskCard from './components/TaskCard';

class TaskSingle extends Component {
  state = {
    task: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    try {
      const task = await taskService.getSingleTask(id)
      this.setState({
        task,
        loading: false,
      })
    } catch (error) { }
  }

  deleteTask = () => {
    const { params } = this.props.match;
    taskService
      .deleteTask(params.id)
      .then(() => { this.props.history.push("/tasks"); })
      .catch(err => { });
  };

  render() {
    const { task, loading } = this.state;
    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && <div>
          <TaskCard task={task} />
          <Link to={`/tasks/${task._id}/update`}>Edit</Link>
          <br></br>
          <Link onClick={() => this.deleteTask()}>Delete</Link>
        </div>}
      </>
    );
  }
}

export default TaskSingle;