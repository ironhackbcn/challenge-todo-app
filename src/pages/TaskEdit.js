import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";


class TaskEdit extends Component {
  state = {
    title: "",
    body: "",
  };


  editTask = async (id, title, body) => {
    try {
      const res = await axios({
        method: "PUT",
        url: process.env.REACT_APP_API_URL + `/api/v1/todos/${this.props.match.params.id}`,
        data: {id, title, body}
      })
    } catch (error) {
      console.log(error);
    }
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { title, body } = this.state
    const id = this.props.task._id
    this.editTask(id, title, body)
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="page profile">
            <Navbar />        
            <div className="edit-div edit-profile-form">
              <h4>Edit your task</h4>
              <form onSubmit={this.handleFormSubmit} >
                <label htmlFor="username">Edit title:</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={this.title}
                  onChange={this.handleChange}
                />

                <label htmlFor="phone">Edit body:</label>
                <input
                  id="body"
                  type="text"
                  name="body"
                  value={this.body}
                  onChange={this.handleChange}
                />
                <div>
                  <input type="submit" value="SAVE TASK"/>
                </div>
              </form>
           
        </div>
      
      </div>
    );
  }
}
export default TaskEdit;
