import React, { Component } from 'react';
import './App.css';

import { Switch, Route} from "react-router-dom";
import TodoList from "./pages/TodoList";

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Switch>
          <Route exact path= "/todos" component={TodoList} />

        </Switch>

      </div>
    );
  }
}

export default App;
