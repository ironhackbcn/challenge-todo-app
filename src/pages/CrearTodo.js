import React, { Component } from "react";
import axios from "axios";

class CrearTodo extends Component {
   
        state = {
            title: "",
            body: ""
        
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let {
            title,
            body
        } = this.state;

        axios.post(`http://localhost:4000/api/v1/todos`, {title, body}
        
        )
        .then(() => {
            this.props.history.push(
                `http://localhost:4000/api/v1/todos `
            );
        })
        .cath((error) => console.log(error));
    };

    handleCreateLibro = (e) => {
        const { title, body } = e.target;
        this.setState({
            [title]: body,
        });
    };

    // handleChange = (e) => {
    //     const { title, body } = e.target;
    //     this.setState({ [title]: body });
    // };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleCreateLibro(e)}
          />
          <br />
          <label>Body: </label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleCreateLibro(e)}
            
          />
          <button type="submit" value="Submit" >crear</button>
          <h1>No escribe en el imput llevo un rato y ya no hay tiempo</h1>
          </form>
            </div>
        );
    }
}

export default CrearTodo;
