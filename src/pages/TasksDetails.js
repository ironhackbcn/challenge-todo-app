import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';

class TaskDetails extends Component {
    state = {
        task: this.props.location.state.tasksList,
    }

  getSingleTask = async () => {
    try {
        const res = await axios({
          method: "GET",
          url:
          process.env.REACT_APP_API_URL + `/api/v1/todos/${this.props.match.params.id}`
        });
        this.setState({
          listOfCosts: res.data[0],
        });
      } catch (error) {
        console.log(error, "GET expenses error");
      }
    };

    deleteTask= async () => {
        try {
          const res = await axios({
            method: "DELETE",
            url:
              process.env.REACT_APP_API_URL + `/api/v1/todos/${this.props.match.params.id}`,
          });
          this.props.history.push("/list")
    
        } catch (error) {
          console.log(error, "error on DELETE the task");
        }
      };

  render() {
    const {task} = this.state;
    return (
    <div>
      <Navbar />

      <h2>{task.title}</h2>
      <h5>{task.body}</h5>

      <div>
        <Link to= {`/edit-task/${task._id}`}>Edit task</Link>
        <button onClick={this.deleteTask}>Delete task</button>
      </div>
    </div>
    )
  }
}

export default TaskDetails