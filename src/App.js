import React, { Component } from 'react';
import './App.css';
import ToDoList from './pages/ToDoList';
import Tasks from "../src/components/Tasks"
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
     <div className="App">

      <Switch>
        <Route exact path="/todos" component={ToDoList}/>
      <Route exact path="/todos/:id" component={Tasks} />
      </Switch>
    </div>
    );
  }
}

export default App;
