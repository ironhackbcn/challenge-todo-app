import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewTodo from  './pages/NewTodo'
import TodoList from './pages/TodoList'
import './App.css';



class App extends Component {
 
  render() {
    return (
        <Router>
          <main>
            <Switch>
              <Route path="/" exact component ={TodoList} />
              <Route path='/create-rodo' exact component ={NewTodo}/>
            </Switch>
          </main>
        </Router>
     

    );
  }
}

export default App;
