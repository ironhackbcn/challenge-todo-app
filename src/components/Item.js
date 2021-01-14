import React, { Component } from 'react'

export default class Item extends Component {

  state = {
    items: [],
    showForm: false,
    title: "",
    body: ""
  };

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
  render() {
    return (
      <div>
        {this.props.props && this.props.props.map((item) => {
          return (
            <div key={item._id}>
              <h3>{item.title}</h3>
              <li>{item.body}</li>
              <button onClick={this.showForm}>Edit</button>
              <button onClick={this.deleteItem}>Delete</button>
            </div>
            )
        })}
      </div>
    )
  }
}
