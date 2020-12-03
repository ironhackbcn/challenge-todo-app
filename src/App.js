import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import List from "./components/List";
import NewTodo from "./components/NewTodo"

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
       <Route exact path="/" component={List}></Route>
       <Route exact path="/newTodo" component={NewTodo}></Route>
       <Route exact path="/newTodo/:id" component={NewTodo}></Route>
     </Switch>
      </div>
    );
  }
}

export default App;
