import React, { Component } from 'react'
import todoService from '../sevices/TodoService';

export default class TodoInput extends Component {
    _isMounted=false;
    state={
        title:"",
        body:"",
    }

    componentDidMount(){
        this._isMounted=true

    }
    handleChange = (event) =>{
        event.preventDefault();
        const{name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        const {title,body} = this.state

        todoService.createTodo({title,body})
        .then (todo=>{
            if(this.isMounted){
                this.setState({
                    title: "",
                    body:""
                })
            }
        })
    }
   

    
    render() {
        const {title,body}= this.state;
        return (
            <form onSubmit= {this.handleFormSubmit}>
                <label> Todo Title</label>
                <input type ="text" name="title" value={title}onChange={this.handleChange} placeholder='title' required/>
            
                <label>What do you have todo?</label>
                <input type="text" name='body' value={body}  onChange={this.handleChange} placeholder='body'/>
                <button>Save</button>
            </form>
        )
    }
}
