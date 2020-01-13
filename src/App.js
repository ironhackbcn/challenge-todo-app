import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';


import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        

         <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/todos/:id" component={TodoDetails} />
        </Switch>

      </div>
    );
  }
}

export default App;
