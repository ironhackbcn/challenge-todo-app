import React, { Component } from 'react'


export default class TodoInput extends Component {
    submitForm = e => {
        e.preventDefault();
        this.props.handleSubmit(e);
      };
    
      changeInput = e => {
        e.preventDefault();
        this.props.handleOnChange(e);
      };
    

    render() {
        return (
            <div>
                 
            <form onSubmit= {this.submitForm}>
            <label> Todo Title</label>
            <input type ="text" id= "title" name="title" defaultValue={this.props.title} onChange={this.changeInput} placeholder='title' required/>
        
            <label>What do you have todo?</label>
            <input type="text"  id= "title" name='body' defaultValue={this.props.body}  onChange={this.changeInput} placeholder='body'/>
            <button>Save</button>
            </form>

        
            </div>
        )
    }
}
