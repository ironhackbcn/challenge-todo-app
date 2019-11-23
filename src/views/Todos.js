import React, { Component } from "react";
import image from "../components/assets/bottom-img.png";
import Form from "../components/Form";
import Card from "../components/Card";

import todoService from "../components/services/todoService";

class Todos extends Component {
  state = {
    title: "",
    body: "",
    todos: [],
    dones: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const todos = await todoService.getAllTodos();
      const dones = await todoService.getAllDones();
      this.setState({
        todos,
        dones,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false
      });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { title, body } = this.state;
    try {
      await todoService.createTodo({
        title,
        body
      });
      const todos = await todoService.getAllTodos();
      this.setState({
        todos,
        title: "",
        body: ""
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  handleTodoDelete = async id => {
    try {
      await todoService.deleteTodo(id);
      const todos = await todoService.getAllTodos();
      const dones = await todoService.getAllDones();
      this.setState({
        todos,
        dones
      });
    } catch (error) {
      console.log(error);
    }
  };

  markUnmark = async id => {
    try {
      const todo = await todoService.getTodo(id);
      if (todo.done) {
        todo.done = false;
      } else {
        todo.done = true;
      }
      await todoService.updateTodo(todo);
      const todos = await todoService.getAllTodos();
      const dones = await todoService.getAllDones();
      this.setState({
        todos,
        dones
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { title, body, todos, dones, loading } = this.state;

    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className="todo">
            

            <div className="input">
            <h1 className="header">To do list</h1>
              <Form
                title={title}
                body={body}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <section>
              <div id="todo" className="container">
                <h2>To do</h2>
                <section>
                  {todos.map((task, index) => {
                    return (
                      <Card
                        key={`${task.title}-${index}`}
                        id={task._id}
                        title={task.title}
                        delete={this.handleTodoDelete}
                        check={this.markUnmark}
                        atribute={false}
                      />
                    );
                  })}
                </section>
              </div>
              <div id="done" className="container">
                <h2>Done</h2>
                <section>
                  {dones.map((task, index) => {
                    return (
                      <Card
                        key={`${task}-${index}`}
                        id={task._id}
                        title={task.title}
                        delete={this.handleTodoDelete}
                        check={this.markUnmark}
                        atribute={true}
                      />
                    );
                  })}
                </section>
              </div>
              <div>
                <img src={image} className="bottom-img" alt="img" />
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

export default Todos;
