import React, { Component } from 'react';
import taskService from '../../services/taskService';
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

  render() {
    const { task, loading } = this.state;
    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && <TaskCard task={task} />}
      </>
    );
  }
}

export default TaskSingle;