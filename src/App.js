import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./views/Navbar";
import TaskAll from './views/tasks/TaskAll';
import TaskSingle from './views/tasks/TaskSingle';
import TaskUpdate from './views/tasks/TaskUpdate';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/tasks" component={TaskAll} />
            <Route exact path="/tasks/:id" component={TaskSingle} />
            <Route exact path="/tasks/:id/update" component={TaskUpdate} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
