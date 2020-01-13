import React, {Component} from 'react';
import redux from 'redux';
import todoService from './../services/todoService';
import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class TasksList extends Component {
  
  deleteTask = (id) => {
    console.log(id)
    todoService.deleteOne(id)
    .then( () => {
      console.log('deleted');
      this.props.deleteTask(id);
    })
    .catch( err => console.log(err))

  }
  componentDidMount() {
    todoService.getAll()
      .then( (tasks) => {
        this.props.addAllTasks(tasks)
      }) 
      .catch( error => console.error('errooooor',error));
  }

  render() {
    const  { todos } = this.props;

    return (
      <div>
        <h2>List of tasks</h2>
        { todos
          ? (
            todos.map(task => {
                return (
                  <div>
                    <h4>{task.title}</h4>
                    <p>{task.body}</p>
                    <button onClick={() => this.deleteTask(task._id)}>Delete task</button>
                  </div>
                )   
            })
          )
          : null
    }       
      </div>   
    )
  }
}

// redux setup in component
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAllTasks: allTasks => {
      dispatch(actions.addAllTasks(allTasks));
    },
    deleteTask: taskId => {
      dispatch(actions.deleteTask(taskId));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);