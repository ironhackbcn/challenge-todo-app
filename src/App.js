import React from 'react';
import './App.css';
import TodosList from './components/TodosList'
import DeleteTodo from "./components/DeleteTodo";
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'


import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
      <Switch>
        {/* <Route exact path="/todos" component={AddTodo} /> */}
        <Route exact path="/todos/:id" component={DeleteTodo} />
        <Route exact path="/todos" component={TodosList} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;