import React, { Component } from 'react'
import axios from 'axios';

export default class Create extends Component {
    state = {
       
        title: '',
        body: ''
    }
    
   
    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {title, body} = this.state
        await axios.post('http://localhost:4000/api/v1/todos', {title, body})
        this.setState({
            title: '',
            body: ''
        })
    }

    
    render() {
        console.log(this.state.todos)
        return (
     <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">body</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" >Save</button>
        </form>
            <h2>Tareas</h2>
            
        
</div>
        )
    }
}
