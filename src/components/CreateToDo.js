import React, { Component } from 'react'
import ToDo from '../lib/Todo'

export default class CreateToDo extends Component {
state={
note: "",
}

    handleSubmit = (e) =>{
        e.preventDefault()
        ToDo.add(this.state.note)
        .then((result) => {
        this.props.getAll()
        this.setState({note: ""})
        }).catch((err) => {
            console.log("wasnt sent", err)
        });
    }
    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        };
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>What do you need to do?</label>
        <input
        onChange={this.handleInput} 
        type="text" 
        name="note" 
        value={this.state.note} />
                <button className="add">Add </button>
                </form>
            </div>
        )
    }
}
