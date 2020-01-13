import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TodoDetails extends Component {
 

  render(){
    return (
      <div>
       <h1>editing</h1>
       <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
    )
  }
}

export default TodoDetails;