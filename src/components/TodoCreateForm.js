import React, { Component } from 'react';
import todoService from '../service/todoService';

 class TodoCreateForm extends Component {
     _isMounted = false
     state={
         title: '',
         body: ''
     }

     componentDidMount(){
        this._isMounted = true
        //console.log("mounted")
      }

      handleFormSubmit = event => {
        event.preventDefault();
        const { title, body } = this.state;
    
          todoService.createTodo({ title, body })
          .then(todo => {
            if(this._isMounted){
            this.setState({
                title: '',
                body: ''
            })}
            // console.log(this.props)
            //this.props.history.goBack()
          });
      };

     handleChange = event => {
        const { name, value } = event.target;
        if(this._isMounted){
        this.setState({ [name]: value });}
      };


    render() {
        const { title, body } = this.state;
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='inp-lab'>
                    <label>Todo Title<strong>*</strong></label>
                    <input type="text" name='title' value={title}  onChange={this.handleChange} placeholder='title' required/>
                </div>
                <div className='inp-lab'>
                    <label>What do you have todo?</label>
                    <input type="text" name='body' value={body}  onChange={this.handleChange} placeholder='body'/>
                </div>
                <div className='inp-lab'>
                    <input type="submit" value="Create" />
                </div>
            </form>
        )
    }
}

export default TodoCreateForm