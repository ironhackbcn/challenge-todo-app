import React, { Component } from 'react';
import './App.css';
import ListTodos from './components/ListTodos';


class App extends Component {

 
  render() {
    return (
      <div className="App">
       <ListTodos history={this.props} />
      </div>
    );
  }
}

export default App;
