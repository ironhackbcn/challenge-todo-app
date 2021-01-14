import React, { Component } from 'react';

import AddTodoForm from './components/AddTodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm/>
      </div>
    );
  }
}

export default App;
