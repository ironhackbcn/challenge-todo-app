import React, { Component } from "react";
import todoservice from '../lib/service'
import './Add.css'

class Add extends Component {
    state = {
        title: '',
        body: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({ [name]: value });
    };
    
    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        
        console.log(title, body)
        await todoservice.addTodo(title, body );
        this.setState({
            title: '',
            body: ''
    });
    this.props.history.push('/')
}
    render(){
       
        return(
            <div className='main'>
            <h2>Add a <em>To-Do</em> to your list</h2>
                <form onSubmit={this.handleFormSubmit}>
            <div className="form">
            <div className='parts'>
                <label>Title:</label>
                <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                />
            </div>
            <div className='parts'>
            <label>Description:</label>
              <textarea
              style={{width: 300, height: 100}}
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </div>
            
            <input
                className="btn"
                type="submit"
                value="Add to the list"
              />
              </div>
          </form>
          <button className="btn_back" onClick={() => this.props.history.goBack()}>Go back</button>
          
            </div>
            
        )
        
    }
}

export default Add;