import React, { Component } from 'react'
import authService from './../lib/auth-service'; 

export default class AddCard extends Component {
    state = {
        title: '',
        body: ''
      }
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        const { title, body } = this.state;
        if(title,body) {
          authService.create({title,body})
            .then( (data) => {
                this.props.updateCards();
            })
        };
      }
    render() {
        return (
            <div className = 'addcard'>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                    <label>Title</label>
                    <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                </div>
                <div>
                    <label>Body</label>
                        <input
                        type="text"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
