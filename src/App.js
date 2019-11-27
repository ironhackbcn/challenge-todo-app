import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewTodo from  './pages/NewTodo'
import TodoList from './pages/TodoList'
import EditTodo from './pages/EditTodo'
import './App.css';



class App extends Component {
 
  render() {
    return (
        <Router>
          <main>
            <Switch>
              <Route path="/" exact component ={TodoList} />
              <Route path='/create-rodo' exact component ={NewTodo}/>
              <Route path='/edit/:id' exact component ={EditTodo}/>
            </Switch>
          </main>
        </Router>
     

    );
  }
}

export default App;
