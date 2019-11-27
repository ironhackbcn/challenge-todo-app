import React, { Component } from 'react'

export default class toDoCard extends Component {

    deleteToDo(id, title){
        this.props.deleteToDo(id, title)
        console.log("delet To do id: " + id)
    }

    render() {
        return (
            <div>
                <h3>Title: {this.props.todo.title}</h3>
                <p>{this.props.todo.body}</p>
                <button onClick={() => this.deleteToDo(this.props.todo.id, this.props.todo.title)}>Delete</button>
            </div>
        )
    }
}
