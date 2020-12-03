import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo'
import UpdateTodo from './components/UpdateTodo';
import Home from './components/Home'
class App extends Component {

  render() {
    return (
      <div className="appjs">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={Todo} />
              <Route path="/create" component={CreateTodo} />
              <Route path="/todos/:id" component={UpdateTodo} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
