import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import pages

import AllTodos from './pages/AllTodos';
import CreateTodo from './pages/CreateTodo';

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
           <Route path='/' exact component={AllTodos}/>
           <Route path='/create' exact component={CreateTodo}/>
         </Switch>
      </Router>
    );
  }
}

export default App;
