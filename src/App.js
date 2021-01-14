import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

class App extends Component {
  state = {
    myListArr: [],
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((response) => {
        const myListArr = response.data;
        this.setState({ myListArr });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <AddTask getTasks={this.getTasks} />
        <section>
          {this.state.myListArr && this.state.myListArr.length > 0 ? (
            this.state.myListArr.map((task) => {
              return (
                <div>
                  <Task getTasks={this.getTasks} task={task} />
                </div>
              );
            })
          ) : (
            <p className="no-posts">You don't have any task, create one </p>
          )}
        </section>
      </div>
    );
  }
}

export default App;
