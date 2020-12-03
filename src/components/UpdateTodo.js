import React, { Component } from 'react';
import axios from 'axios';
class UpdateTodo extends Component {
    state = {
        title: "",
        body: ""
    };

    getTodos = () => {
        const id = this.props.match.params.id
        console.log(id, "ID UPDATETODO")
        axios.get(`http://localhost:4000/api/v1/todo/${id}`).then(response =>{
            console.log(response, "respuesta de llamada a axios?¿?")
            this.setState({
                title: response.data.title,
                body: response.data.body,
            })
            console.log(response.data.body, "STATE UPDATE")
        })
    }

    handleFormSubmit = async (e) => {
      e.preventDefault();
      const {id} = this.props.match.params
      console.log(id, 'PARAAAAAAAAAAAAMMMMMMMMSSSSSSS')
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
        console.log(this.state, 'THIS STATEEEEEEEE')
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
            <button type="submit" value="Submit">Actualizar</button>
          </form>
        </div>
      );
    }
  }

export default UpdateTodo;