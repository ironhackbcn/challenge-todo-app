import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// Assets

import './App.css';

// Components

import TodoList from './pages/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import TaskDetailsPage from './pages/TaskDetails/TaskDetailsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/add" component={AddTodo} />
          <Route exact path="/details/:id" component={TaskDetailsPage} />

        </Switch>
        
      </div>
    );
  }
}

export default App;
