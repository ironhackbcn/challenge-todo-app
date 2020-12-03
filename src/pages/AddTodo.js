import  axios  from "axios";
import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = { 
        title: "",
        body: "",
    }
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    axios
    .post("http://localhost:4000/api/v1/todos", { title, body })
    .then(() => {
      this.setState({ title: "", body: "" });
      this.props.history.push(`/`);
    })
    .catch(error => console.log(error));
  }

   handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
      };
    
    render() {
        const { title, body } = this.state;
        return (
            <div className="">
                <h1 className="">Add To do on my list</h1>

                <form className="" onSubmit={this.handleFormSubmit}>

                <div className="">
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={ e => this.handleChange(e)} required/>
                </div>

                <div className="">
                <label>Body:</label>
                <input type="text" name="body" value={body} onChange={ e => this.handleChange(e)}/>
                </div>

                <div className="">
                <input className="" type="submit" value="Submit"/>
                </div>
                </form>
            </div>
        )
    }
}
export default AddTodo;