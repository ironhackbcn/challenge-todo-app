import React, {Component} from 'react';
import redux from 'redux';

class AddTask extends Component {

  state = {
    title: '',
    body: ''
  }

  render() {
    return (
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text"/>
        <label htmlFor="">Description</label>
        <input type="text"/>
      </form>
    )
  }
}

export default AddTask;