import React, { Component } from 'react';

class CreateForm extends Component {

  state = {
    title: '',
    body: '',
  }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      })
    }

  handleSubmit = (event) => {
    event.preventdefault();
    this.props.onSubmit(this.state);
      this.setState({
        title: '',
        body: '',
      })
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <form className="create-form" onSubmit={this.handleSubmit}>
        <label>Todo Title:</label> 
        <input type="text" name="title" value={title} onChange={this.handleChange} required/>
        <label>Description:</label>
        <textarea type="text" name="body" value={body} onChange={this.handleChange} required/>
        <input className="button" type="submit" value="Create" /> 
      </form>
      </div>
    );
  }
}

export default CreateForm;