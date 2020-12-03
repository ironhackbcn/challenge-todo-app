import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NewTask from "./pages/NewTaskPage";
import TasksPage from "./pages/TasksPage";
import Navbar from "./components/Navbar";
import TaskDetailsPage from "./pages/TaskDetailsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={TasksPage} />
        <Route exact path="/new-task" component={NewTask} />
        <Route exact path="/todos/:id" component={TaskDetailsPage} />
      </div>
    );
  }
}

export default App;
