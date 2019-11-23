import React, { Component } from 'react';
import taskService from '../../services/taskService';

class TaskUpdate extends Component {
  state = {
    task: {}
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    try {
      const task = await taskService.getSingleTask(id)
      this.setState({
        task
      })
    } catch (error) { }
  }

  handleChange = event => {
    const { task } = this.state;
    console.log(this.state)
    this.setState(
      {
        task: {
          ...task,
          [event.target.name]: event.target.value
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;
    const { history: { push } } = this.props;
    taskService
      .updateTask(task)
      .then(() => { push(`/tasks`) })
      .catch(() => { })
  };

  render() {
    const { task: { title, body } } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
          <input type="text" name="body" id="body" value={body} onChange={this.handleChange} />
          <input type="submit" value="update" />
        </form>
      </>
    );
  }
}

export default TaskUpdate;