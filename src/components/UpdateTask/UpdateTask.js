import React, { Component } from 'react'
import axios from 'axios';

class UpdateTask extends Component {
    state = {
        title: "",
        body: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        const id = this.props.id
        axios.put(`http://localhost:4000/api/v1/todos/${id}`, { title, body })
        .then( () => {
            this.setState({ title: "", body: "" })
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    removeTask = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
        .then( (response) => {
        
        })
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
                <button onClick={this.removeTask(this.props.id)}>Remove</button>
            </div>
        )
    }
}

export default UpdateTask;