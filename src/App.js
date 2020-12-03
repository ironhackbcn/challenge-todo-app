import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './component/Create';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Edit from './component/Edit';




class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
            <Route path="/" exact component={Create}/>
            <Route path="/edit/:id" exact component={Edit}/>
      </div>
      </Router>
    );
  }
}

export default App;
