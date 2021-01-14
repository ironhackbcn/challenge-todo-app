import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Create from "./components/Create/Create";
import List from "./components/List/List";



class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Create /> */}
        <List />

      </div>
    );
  }
}

export default App;
