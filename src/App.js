import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './components/Todo';
import TodoDetail from './pages/TodoDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/todos' component={Todo}/>
        <Route exact path='/todos/:id' component={TodoDetail} />
      </Switch>
      </div>
    );
  }
}

export default App;
