import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Create from './components/Create';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
