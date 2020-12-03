import React, { Component } from "react";
import axios from "axios";

class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theTodo.title,
      body: this.props.theTodo.body
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const body = this.state.body;

    event.preventDefault();

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.theTodo._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.getTheTodo();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeDesc = event => {
    this.setState({
        body: event.target.value
    });
  };

  render() {
      const {title,body} = this.state;
    return (
      <div className="edit-form">
        <hr/>
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={title} placeholder="New title" onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <textarea name="body" value={body} placeholder="Edit your info" onChange={e => this.handleChangeDesc(e)}/>

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UpdateTodo;