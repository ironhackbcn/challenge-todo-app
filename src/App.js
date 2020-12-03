import React, { Component } from 'react';
import './App.css';
import AddTodo from "./pages/AddTodo";
import { Switch, Route } from "react-router-dom";
import AllTodos from "./pages/AllTodos";
import Navbar from "./components/Navbar";
import TodoDetails from "./pages/TodoDetails";

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/create" component={AddTodo}/>
          <Route exact path="/" component={AllTodos} />
          <Route exact path="/todos/:id" component={TodoDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
