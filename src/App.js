import React, { Component, } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateTodo from './pages/CreateTodo';
import ListTodos from './components/ListTodos';
import DeleteTodo from './components/DeleteTodo';
import HomePage from './components/HomePage';
import Error404 from './components/Error404';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/create' component={CreateTodo} />
        {/*   <Route exact path='/list' component={ListTodos} />
          <Route exact path='/delete' component={DeleteTodo} /> */}
          <Route path='*' component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
