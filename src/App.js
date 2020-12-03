import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TodosList from "./components/TodosList"
import CreateTodo from "./components/CreateTodos"
import EditTodo from "./components/EditTodos"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      
        <div className="page-principal">
         <nav className="navbar">
           <Link to="/" className= "link">To Do App</Link>
            <ul className= "nav-options">
              <li >
                <Link to= "/" className= "link">Todos</Link>
              </li>
              <li>
                <Link to= "/create" className= "link">Create</Link>
              </li>
              </ul>
         </nav>
         <Switch>
            <Route exact path="/" component={TodosList} /> 
            <Route exact path= "/edit/:id" component={EditTodo} />
            <Route exact path= "/create" component={CreateTodo} />

         </Switch>

        </div>
      </Router>
    );
  }
}

export default App;