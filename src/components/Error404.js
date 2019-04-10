import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <div>
        <h2>oopssss!! nothing here</h2>
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default Error404;