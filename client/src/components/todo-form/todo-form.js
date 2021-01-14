import React, { Component } from "react";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      user: "Mirko",
      title: "",
      body: "",
    };
  }
  validateForm = (event) => {
    event.preventDefault();
    const { user, title, body } = this.state;
    this.props.addItem(user, title, body);
    user, title, (body = "");
    this.setState({ user, title, body });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("name :>> ", name, "value", value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.validateForm}>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <input
              type="hidden"
              id="user"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write your title here"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="body">Body</label>
          </div>
          <div>
            <textarea
              className=""
              cols="20"
              id="body"
              name="body"
              rows="4"
              value={this.state.body}
              placeholder="Type your message here ..."
              onChange={this.handleChange}
            />
          </div>
          <div className="">
            <input className="" value="SEND" id="submit" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
