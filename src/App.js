import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home'
import NewTodo from './views/NewTodo'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewTodo} />
          
        </Switch>
        
      </Router>
    );
  }
}

export default App;
