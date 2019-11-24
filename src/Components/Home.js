import React, { Component } from "react";

import CreateTodo from "./CreateTodo";
import ListTodos from "./ListTodos";
import todoService from "../service/todoService";

class Home extends Component {
  state = { todos: [], loading: true };

  addNewtodo = newTodo => {
    this.setState({ loading: true });
    const allTodos = this.state.todos;
    this.setState({ todos: [...allTodos, newTodo] });
    this.setState({ loading: false });
  };

  updateList = async () => {
    this.setState({ loading: true });
    const { data: todoList } = await todoService.getAllTodo();
    this.setState({ todos: [...todoList] });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.updateList();
    this.setState({ loading: false });
  }

  render() {
    const { todos, loading } = this.state;
    return (
      <div>
        <CreateTodo addNewtodo={this.addNewtodo} />
        <ListTodos
          todos={todos}
          loading={loading}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default Home;
