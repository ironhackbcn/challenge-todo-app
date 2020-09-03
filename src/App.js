import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import pages

import TodosLists from './pages/TodosLists';

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
           <Route path='/' exact component={TodosLists}/>
         </Switch>
      </Router>
    );
  }
}

export default App;
