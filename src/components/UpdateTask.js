import React, { Component } from 'react'
import axios from 'axios'


export default class UpdateTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theTask:this.props.task,
      task: "",
      todoList: []
  }
}
  editTask = (e) => {
    e.preventDefault()

   
    let showTask = document.getElementById("update-form");
    showTask.style.display = "block";
    let showInput = document.getElementById("update-input");
    showInput.style.display = "block";

    const { task } = this.state;

    const id = this.state.theTask._id;
    const title = task
    console.log(title)

    axios
      .put(`http://localhost:4000/api/v1/todos/${id}`, {
       title
      })
      .then(response => {
      
        console.log("Hello", response.data);
        this.props.getTodoList();
        this.setState({ task });
      })
      .catch(err => {
        console.log(err);
      });
  };


  handleInput = e => {
    const { value } = e.target;
    this.setState({ task: value });
  };
   
    render() {
        return (
            <div style={{ borderBottom:"1px solid black" }}>
                <form onSubmit={this.editTask}> 
                <label id="update-form">Update:</label>
                <input
                    id="update-input"
                    type="text"
                    value={this.state.task.title}
                    name="username"
                    onChange={this.handleInput}
                    className="task-input"
                ></input>
                <button className="task-btn" id="update-btn">Update Task</button>
                </form>
            </div>
        )
    }
}


