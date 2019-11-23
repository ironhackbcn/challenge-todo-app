import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../src/components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <Form />
      </div>
    );
  }
}

export default App;
