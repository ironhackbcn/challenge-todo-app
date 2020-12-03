import  axios  from "axios";
import React, { Component } from 'react';

class AllTodos extends Component {
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
    .get("http://localhost:4000/api/v1/todos", { title, body })
    .then(() => {
      this.setState({ title: "", body: "" });
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
                <h1 className="">To do list</h1>

                
            </div>
        )
    }
}
export default AllTodos;