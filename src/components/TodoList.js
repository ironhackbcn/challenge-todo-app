import React, { Component } from "react";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
// import DeleteTask from './DeleteTask'
import axios from "axios";

export class TodoList extends Component {
  state = {
    todoList: [],
    input: ""
  };

  deleteComment = id => {
    const todoList = this.state.todoList;
    console.log(id);
    const taskId = id;
    console.log("Hello", todoList);

    let newTodoList = todoList.filter(el => {
      return el._id !== id;
    });

    console.log(newTodoList);

    axios
      .delete(`http://localhost:4000/api/v1/todos/${taskId}`)
      .then(response => {
        console.log("Hello", response);
        const task = response.data;
        console.log(task);
        //    if (finalCommentsList > 1) {
        this.setState({ todoList: newTodoList });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getTodoList = () => {
    axios.get("http://localhost:4000/api/v1/todos").then(response => {
      this.setState({ todoList: response.data });
    });
  };

  componentDidMount() {
    this.getTodoList();
  }

  render() {
    const newTodoList = this.state.todoList.reverse();

    return (
      <div>
        <h1 id="title">Welcome to <span id="italics">Todo List</span></h1>
        <AddTask getTodoList={this.getTodoList} />
        <div id="todoList">
          {newTodoList.map((task, index) => {
            return (
              <div key={task._id} className="task">
                <h3 >{task.title} </h3>
                <div>
                  <button
                    id="delete-btn"
                    className="task-btn"
                    onClick={e => this.deleteComment(task._id)}
                  >
                    Delete Task
                  </button>
                </div>
                {/* <DeleteTask /> */}
                <UpdateTask task={task} getTodoList={this.getTodoList}/>

            
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
