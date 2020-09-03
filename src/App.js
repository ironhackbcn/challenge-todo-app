import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header.component";
import CreateTodo from "./pages/createToDo.page";
import ListTODO from "./pages/ListTODO.page";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact  path='/' component={CreateTodo}/>
        <Route exact path='/createTODO' component={CreateTodo}/>
        <Route exact path='/listTODO' component={ListTODO}/>
      </Switch>
    </Router>
  );
}

export default App;
