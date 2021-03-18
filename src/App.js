import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'; 

import InputField from './components/InputField';
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to your todo list</h1>
      <Switch>
        <Route exact path="/" component={InputField} />
        <Route exact path="/:id" component={TaskList} />
      </Switch>
      </div>
    );
  }
}

export default App;
