import React, { Component } from 'react'
import authService from './../lib/auth-service'; 

export default class Card extends Component {
    buttonSubmit = (id) => {
        authService.delete(this.props.id)
            .then( (data) => this.props.updateCards())
            .catch( (err) => console.log(err));
    }
    render() {
        return (
            <div className = 'card'>
                <h1>{this.props.title}</h1>
                <hr />
                <p>{this.props.body}</p>
                <a
                    onClick = {this.buttonSubmit}
                    href = '#'
                >Delete
                </a>
            </div>
        )
    }
}
