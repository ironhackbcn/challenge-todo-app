import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskDetailsPage extends Component {
    state = {
        TaskToDisplay: {},
        title: '',
        description: ''
    }

    componentDidMount() {
        let {id} = this.props.match.params;
        axios.get(`http://localhost:4000/api/v1/todos/${id}`)
            .then((response) => {
                this.setState({TaskToDisplay: response.data})
            })
            .catch((err) => console.log(err));
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleUpdate = (e, id) => {
        e.preventDefault();
        const {title, description} = this.state;

        axios.put(`http://localhost:4000/api/v1/todos/${id}`, {title, description})
            .then( (newEntry) => {
                this.props.history.push(`/`)
            })
        }


    render() {
        return (
            <div>
                <h3> Edit Task </h3>
                <form onSubmit={this.handleUpdate}>
                    <input 
                        type="text"
                        placeholder={this.state.TaskToDisplay.title}
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        placeholder={this.state.TaskToDisplay.description}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Update</button>
                    <Link to={'/'}><button>Go back</button></Link>
                </form>
            </div>
        )
    }
}

export default TaskDetailsPage;