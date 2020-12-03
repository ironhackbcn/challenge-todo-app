import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Home from './pages/Home';
import ToDoDetails from './components/ToDoDetails';
import EditToDo from './pages/EditToDo';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Switch and routes defined to create pages and components */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/:id" component={ToDoDetails} />
          <Route exact path="/todos/edit/:id" component={EditToDo} />
        </Switch>
      </div>
    );
  }
}

export default App;
