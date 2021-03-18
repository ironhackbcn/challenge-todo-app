import React, { Component } from 'react'
import axios from 'axios';

class CreateTask extends Component {
    state = {
        title: "",
        body: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        axios.post("http://localhost:4000/api/v1/todos", { title, body })
        .then( () => {
            this.setState({ title: "", body: "" })
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(event)}>
                    <label>Title</label>
                    <input type="text" name="title" 
                    value={this.state.title} onChange={(event) => this.handleChange(event)} />

                    <label>Description</label>
                    <input type="textarea" name="body" 
                    value={this.state.body} onChange={(event) => this.handleChange(event)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CreateTask;
