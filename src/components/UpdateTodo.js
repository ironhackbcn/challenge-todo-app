import React, { Component } from 'react';
import axios from 'axios';
class UpdateTodo extends Component {
    state = {
        title: "",
        body: ""
    };

    getTodos = () => {
        const id = this.props.match.params.id
        axios.get(`http://localhost:4000/api/v1/todo/${id}`).then(response =>{
            this.setState({
                title: response.data.title,
                body: response.data.body,
            })
        })
    }

    handleFormSubmit = async (e) => {
      e.preventDefault();
      const {id} = this.props.match.params
      const {title, body } = this.state;
      await axios.post(`http://localhost:4000/api/v1/todos/${id}`, { title: title, body: body})
        .then(()=>this.props.getData())
        .catch(error => console.log(error));
    };

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    componentDidMount = () =>{
        this.getTodos();
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Body:</label>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" value="Submit">do it</button>
          </form>
        </div>
      );
    }
  }

export default UpdateTodo;