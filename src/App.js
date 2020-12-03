import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './component/Create';
import axios from 'axios';
class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/v1/todos')
    console.log(res)
    this.setState({todos: res.data})
    
  }

  render() {
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <Create/>
        {this.state.todos.map((element, index) => {
          return (
            <div key={index}>
            <h3>{element.title}</h3>
            <p>{element.body}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
