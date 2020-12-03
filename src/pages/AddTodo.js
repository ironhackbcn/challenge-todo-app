import React, { Component } from 'react'
import auth from "../lib/auth-service";

class AddTodo extends Component {

    state = {
        title: "",
        body: ""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, body } = this.state
        auth.createTodo({ title, body })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} />

                    <label> Body: </label>
                    <input type="text" name="body" value={this.state.body} onChange={ e => this.handleChange(e)} />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddTodo;
