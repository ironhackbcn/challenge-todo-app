import React, {Component} from 'react';
import redux from 'redux';

import * as actions from './../redux/actions/actions';
import todoService from './../services/todoService';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class AddTask extends Component {

  state = {
    title: '',
    body: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, body} = this.state;
    todoService.createOne({title, body})
      .then( () => {
        this.props.addTask({title, body});
        console.log('task added successfully')
      })
      .catch( err => console.error(err));
  }

  render() {
    const { title, description} = this.state;

    return (
      <form  onSubmit={this.handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" 
              name="title" value={title} 
              style={{marginBottom: '10px'}} 
              onChange={this.handleChange}/>

        <label htmlFor="">Description</label>
        <textarea type="text" name="description" 
                  value={description} style={{marginBottom: '10px'}} 
                  onChange={this.handleChange}/>

        <button type="submit" className="btn btn--add-task">Add Task</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAllTasks: allTasks => {
      dispatch(actions.addAllTasks(allTasks));
    },
    addTask: task => {
      dispatch(actions.addTask(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTask);