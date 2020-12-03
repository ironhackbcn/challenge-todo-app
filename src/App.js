import React, {Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/todos" component={Todos}/> 
            <Route exact path="/todos/:id" component={TodoDetails}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
