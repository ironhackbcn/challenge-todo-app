import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Todo from "./pages/Todo";
import CreateTodo from "./pages/CreateTodo";
import DeleteTodo from "./pages/DeleteTodo";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Lista de Todos</h1>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Todo}/>
        <Route exact path='/' component={CreateTodo}/>
        <Route exact path='/' component={DeleteTodo}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
