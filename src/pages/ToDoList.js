import React, { Component } from 'react'
import AddTask from '../components/AddTask';
import Tasks from "../components/Tasks";
import todosService from "../services/todos.service"

class ToDoList extends Component {
  state = {
    tasks: [],
    showTasks: true,
    showForm: true
  }


  toggleTasks = () => {
    this.setState({ showTasks: ! this.state.showTasks  })
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    todosService
      .getAllTodos()
      .then((response) => {
        const tasks = response.data
        
        this.setState({ tasks: tasks });
  })
  }


  toggleForm = () => {
    this.setState({ showForm: ! this.state.showForm  })
  }

  handleDelete = (taskId) => {

    const filtered = this.state.tasks.filter((task) => {
      if (task._id !== taskId) {
        return true;
      }
      else if (task._id === taskId) {
        return false;
      }
    });
    this.setState({ tasks: filtered });

  }

  addNewTask = (newTask) => {
    const updateTasks = [newTask, ...this.state.tasks];
    
    this.setState({ tasks: updateTasks });

  }



  render() {

    return (
      <div>
        <h1>To Do List</h1>

         <button onClick={this.toggleForm}>
          {this.state.showForm ? "Hide" : "Add Task" }
        </button> 

        { this.state.showForm && <AddTask addTask={this.addNewTask} /> }

        <button onClick={this.toggleTasks}>
          {this.state.showTasks ? "Hide" : "Show" } Tasks
        </button>


        {
          this.state.showTasks
            ? this.state.tasks.map((task) => {
                return (
                   
                  <Tasks
                    oneTask={task} 
                    clickToDelete={this.handleDelete}
                  />
                )
            })
            : null
        }

      </div>
    )
  }
}


export default ToDoList;