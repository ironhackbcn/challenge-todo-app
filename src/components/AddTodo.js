import React, { Component } from "react";
import axios from 'axios';

class AddTodos extends Component {
    state = { 
        title: "",
        body: "" 
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        axios
          .post("http://localhost:4000/api/v1/todos", { title, body })
          .then(() => {
            this.setState({ title: "", body: "" });
            this.props.history.push('/todos')
          })
          .catch(error => console.log(error));
      };

    handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }

    render() {
        const { title, body } = this.state;
    return (
            <div className="create-todo">
                <h1>Create new Todo</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" placeholder="New title" value={title} onChange={e => this.handleChange(e)}/>
                    <label>Description:</label>
                    <textarea name="body" value={body} placeholder="Add your description" onChange={e => this.handleChange(e)}/>
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        );

    };
}

export default AddTodos;