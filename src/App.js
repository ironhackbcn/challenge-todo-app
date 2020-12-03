import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Add from './components/Add'
import Todo from './components/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path= "/addTodo" component={Add} />
            <Route exact path= "/:id" component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;
