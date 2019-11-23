import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
