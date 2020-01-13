import React, {Component} from 'react';
import redux from 'redux';
import todoService from './../services/todoService';
import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class TasksList extends Component {

  getAllTasks() {
    todoService.getAll()
      .then( (tasks) => {
        this.props.addAllTasks(tasks)
      }) 
      .catch( error => console.error('errooooor',error));
  }
  
  componentDidMount() {
    this.getAllTasks();
  }
  render() {
    const  { todos } = this.props;

    return (
      <div>
        <h2>List of tasks</h2>
        { todos.map(el => {
            el.forEach(e2 => {
              console.log(e2)
            })
        })}        
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);