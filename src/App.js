import React from 'react';
import './App.css';
import Create from './pages/Create'
import List from './pages/List'
import TasksDetails from './pages/TasksDetails'
import TaskEdit from './pages/TaskEdit'



import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Create} />
          <Route exact path="/list" component={List} />
          <Route exact path="/list/:id" component={TasksDetails} />
          <Route exact path="/edit-task/:id" component={TaskEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
