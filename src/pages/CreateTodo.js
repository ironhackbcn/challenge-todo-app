import React, { Component } from 'react'
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props){
        super(props);
        this.state = { listTodo: []
        };
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        let {
            title,
            body,
        } = this.state;

        axios
            .post(`http://localhost:4000/api/v1/todos`,
            {
                title,
                body,
            }
            )
            .then( () => {
                this.props.history.push('/'); 
            })
            .catch( (error) => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <h3>Create</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    <br/>
                    <label>Body:</label>
                    <input type="text" name="body" value={this.state.body} onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" value="Submit"/>
                </form>   
            </div>
        )
    }
}
export default CreateTodo;