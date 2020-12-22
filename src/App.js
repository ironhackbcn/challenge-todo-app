import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NewTask from "./pages/NewTaskPage/NewTaskPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import Navbar from "./components/Navbar/Navbar";
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage";
import EditTask from "./pages/EditTask/EditTask";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={TasksPage} />
        <Route exact path="/new-task" component={NewTask} />
        <Route exact path="/todos/:id" component={TaskDetailsPage} />
        <Route exact path="/edit/:id" component={EditTask} />
      </div>
    );
  }
}

export default App;
