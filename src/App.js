import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./views/Navbar";
import Home from "./views/Home"
import TaskAll from './views/tasks/TaskAll';
import TaskSingle from './views/tasks/TaskSingle';
import TaskAdd from './views/tasks/TaskAdd';
import TaskUpdate from './views/tasks/TaskUpdate';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tasks" component={TaskAll} />
            <Route exact path="/tasks/:id" component={TaskSingle} />
            <Route exact path="/add" component={TaskAdd} />
            <Route exact path="/tasks/:id/update" component={TaskUpdate} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
