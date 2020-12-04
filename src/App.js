import React, { Component } from 'react';
import './App.css';
import Create from './component/Create';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Edit from './component/Edit';




class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
        <h1>CRUD REACT</h1>
            <Route path="/" exact component={Create}/>
            <Route path="/edit/:id" exact component={Edit}/>
            
      </div>
      </Router>
    );
  }
}

export default App;
