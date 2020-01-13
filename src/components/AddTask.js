import React, {Component} from 'react';
import redux from 'redux';

import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class AddTask extends Component {

  state = {
    title: '',
    body: ''
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" name="" value="" style={{marginBottom: '10px'}}/>

        <label htmlFor="">Description</label>
        <textarea type="text" name="" value="" style={{marginBottom: '10px'}}/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAllTasks: allTasks => {
      dispatch(actions.addAllTasks(allTasks));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTask);