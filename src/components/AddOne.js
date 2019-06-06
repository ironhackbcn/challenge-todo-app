

import React, { Component } from 'react';
import TodoServices from "../todoServices";

class AddOne extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", body: ""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.title && this.state.body){
      TodoServices.addOne(this.state)
      .then(()=>{
        this.setState({ title: "", body:""});
        this.props.updateList()
      })
    }  
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
    console.log(event.target.value)
  }
 
  render(){
    return(
      
      <form onSubmit={this.handleFormSubmit}>
        <label>Title:</label>
        <input type="text" 
          name="title" 
          value={this.state.title} 
          onChange={ (e) => this.handleChange(e) }/>

        <label>Body:</label>
        <div>
        <textarea maxLength="300"name="body" 
          value={this.state.body} 
          onChange={ (e) => this.handleChange(e) } 
          cols={40} rows={10}/>
        </div>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default AddOne;