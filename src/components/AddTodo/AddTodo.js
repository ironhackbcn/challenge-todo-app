import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

class AddTodo extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {title, description} = this.state;

        axios.post('http://localhost:4000/api/v1/todos', {title, description})
            .then( (newEntry) => {
                this.props.history.push(`/`)
            })
        }

    render() {
        return (
            <div>
                <h3> Create a new task</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />

                        <button type="submit">Submit</button>
                        <Link to={'/'}><button>Go back</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTodo;