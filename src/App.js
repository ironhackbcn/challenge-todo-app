import React, { Component } from 'react';
import './App.css';
import  CreateToDo from './components/CreateToDo'
import  ShowToDo from './components/ShowToDo'
import ToDo from './lib/Todo'

class App extends Component {
  state={
  }
  getAllToDo=()=>{
  ToDo.getAll()
  .then((result) => {
      this.setState({list: result.data})
  }).catch((err) => {
  });
  }
  render() {
    return (
      <div className="App">
      <CreateToDo getAll={this.getAllToDo}/>
      <ShowToDo getAll={this.getAllToDo}/>
      </div>
    );
  }
}

export default App;
