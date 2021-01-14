import React, { Component } from "react";
import apiService from "../../lib/api-service";
import ToDoForm from "../todo-form/todo-form";
import ToDoItem from "../../components/todo-item/todo-item";
class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      user: "Mirko",
      toDoList: [],
    };
  }
  componentDidMount() {
    const pr = apiService
      .getAll(this.state.user)
      .then((toDoList) => {
        this.setState({ toDoList });
        return pr;
      })
      .catch((err) => {
        console.log("Error retriving todo - list", err);
      });
  }
  addItem = (user, title, body) => {
    const { toDoList } = this.state;
    apiService
      .createOne(user, title, body)
      .then((createdItm) => {
        toDoList.push(createdItm);
      })
      .catch((err) => {
        console.log("Error creating todo - list item", err);
      });
    console.log("toDoList :>> ", toDoList);
    this.setState({ toDoList });
  };

  deleteItem = (toDoId) => {
    console.log("toDoId :>> ", toDoId);
    const { toDoList } = this.state;
    const newToDoList = toDoList.filter((elem) => elem._id !== toDoId);
    const pr = apiService
      .deleteOne(toDoId)
      .then((deletedItem) => {
        this.setState({ toDoList: newToDoList });
      })
      .catch((err) => {
        console.log(err);
      });
    return pr;
  };

  render() {
    const { toDoList } = this.state;
    return (
      <>
        <ToDoForm addItem={this.addItem} />
        {toDoList.map((el) => {
          return (
            <ToDoItem key={el._id} item={el} deleteItem={this.deleteItem} />
          );
        })}
      </>
    );
  }
}
export default ToDoList;
