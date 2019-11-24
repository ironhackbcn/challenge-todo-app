import React, { Component } from "react";
import CardsTodo from "../Components/CardsTodo";
import todoService from "../service/todoService";

class ListTodos extends Component {
  handleDelete = async id => {
    try {
      const { updateList } = this.props;
      await todoService.deleteTodo(id);
      this.setState({ todo: {}, redirect: true }, () => {
        updateList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { todos, loading } = this.props;
    return (
      <div>
        <h2>Todo List</h2>
        {!loading && <CardsTodo todoList={todos} Delete={this.handleDelete} />}
        {loading && (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}

export default ListTodos;
