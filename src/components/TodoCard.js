import React, { Component } from 'react'

class TodoCard extends Component {

    state = {
        title: "",
        body: ""
    }

    componentDidMount() {
        this.setState({title: this.props.task.title, body: this.props.task.body})
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default TodoCard;
