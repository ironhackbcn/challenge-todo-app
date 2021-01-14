import React, { Component } from 'react';
import AddItem from '../components/AddItem';
import axios from 'axios';
import Item from "../components/Item"

export default class Todo extends Component {

  state = {
    items: [],
    showForm: false,
    title: "",
    body: ""
  };


  getAllItems = () => {
    axios
    .get("http://localhost:4000/api/v1/todos")
    .then((response) => {
      console.log("??????????", response.data);
      this.setState({items: response.data})
    })
  }

  getOneItem = () => {
    axios
    .get("http://localhost:4000/api/v1/todos/:id")
    .then((response) => {
      console.log("ONE ITEM", response.data);
      this.setState({title: response.data.title, body: response.data.body})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  showForm = () => {
      this.getOneItem();
      this.setState({showForm: true })
  }

  handleEdit = () => {
   
    console.log("lalalalallalalalalal");

  }

  handleInput = (event) => {
    let { name, value } = event.target;
    console.log(value);

    this.setState({ [name]: value});
  }

  // deleteItem = (event) => {
  //   axios
  //     .delete
  // }

  // showForm = () => {
  //   axios
  //   .put("http://localhost:4000/api/v1/todos/:id", { title, body })
  //   .then((response) => {
  //     console.log(response.data)
  //     this.setState({showForm: true,  })
  //   })
  // }

  componentDidMount = () => {
    this.getAllItems()
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
      <h1>To Do List</h1>
      <ul>
        <Item props={this.state.item}/>
      </ul>
        <AddItem/>
        { this.state.showForm ?           
            <form onSubmit={this.handleEdit}>
            <h2>Edit Item</h2>

            <label for="title">Title:</label>
            <input type="text" name="title" id="" value={this.state.items.title} onChange={this.handleInput}/>

            <label for="body">Body:</label>
            <input type="text" name="body" value={this.state.items.body} onChange={this.handleInput}/>

            <button type="submit">Edit</button>
          </form> : null}
      </div>
    )
  }
}
