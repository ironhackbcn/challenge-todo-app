import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import Edit from './Components/Edit';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h2>Page TODO</h2> 
         <Switch>
         <Route  exact path="/" component={ List }/>
         <Route  path="/editTask" component={ Edit }/>

         </Switch>
      </div>
    );
  }
}

export default App;