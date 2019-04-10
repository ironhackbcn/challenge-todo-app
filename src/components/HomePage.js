import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Link to='/list'>List os Todos</Link>
        <Link to='/create'>Create a new Todo</Link>
      </div>
    );
  }
}

export default HomePage;