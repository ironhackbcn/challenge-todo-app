import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Todo from "./pages/Todo";
import CrearTodo from "./pages/CrearTodo"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <div>
          <Route exact path='/' component={Todo}/>
          </div>
          <div>
          <Route exact path='/' component={CrearTodo}/>
          </div>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
