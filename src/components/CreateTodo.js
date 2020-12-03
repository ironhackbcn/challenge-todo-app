import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    state = {
        title: "",
        body: ""
    };

    handleFormSubmit = async (e) => {
      e.preventDefault();
      const {title, body } = this.state;
      await axios.post("http://localhost:4000/api/v1/todos", { title, body})
        .then(()=>this.props.getData())
        .then(() => {
        })
        .catch(err => console.log(err));
        this.props.history.push("/todo");
    };

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    render() {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>title:</label>
            <input
              type="text"
              name="title"
              value={this.title}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Body:</label>
            <textarea
              type="text"
              name="body"
              value={this.body}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" value="Submit">Crear</button>
          </form>
        </div>
      );
    }
  }
  export default CreateTodo;