import React, { Component } from 'react'
import axios from 'axios';

export default class AddItem extends Component {

    state = {
      title: "",
      body: ""
    };

    handleInput = (event) => {
      let { name, value } = event.target;
      console.log(value);

      this.setState({ [name]: value});
    }

    handleSubmit = (event) => {
      const { title, body } = this.state

      axios
        .post("http://localhost:4000/api/v1/todos", { title, body })
        .then(() => {
          console.log(title, body);
          this.setState({title: "", body: ""});
        })
        .catch((error) => console.log(error));
    }

    // axios
    // .post("http://localhost:4000/api/v1/todos", { title, body })
    // .then(() => {
    //   console.log(title, body);
    //   this.setState({ title: "", body: "" });
    // })
    // .catch((error) => console.log(error));

    

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Add New Item</h2>

            <label for="title">Title:</label>
            <input type="text" name="title" id="" onChange={this.handleInput}/>

            <label for="body">Body:</label>
            <input type="text" name="body" onChange={this.handleInput}/>

            <button type="submit">+</button>
          </form>
      </div>
    )
  }
}
