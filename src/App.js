import React, { Component } from 'react';
import './App.css';
import TodoList from '../src/components/ToDoList';
import ToDoListDetail from '../src/components/ToDoListDetail';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoList />
        <Switch>
          {/* <Route exact path='/todo' component={TodoCard}/> */}
          <Route exact path='/:id' component={ToDoListDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
