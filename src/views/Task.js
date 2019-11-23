import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import image from "../components/assets/bottom-img.png";
import Card from "../components/Card";
import todoService from "../services/todoService";

class Task extends Component {
  state = {
    todo: "",
    loading: true,
    redirect: false
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const todo = await todoService.getTodo(id);
      this.setState({
        todo,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false
      });
    }
  }

  handleTodoDelete = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      await todoService.deleteTodo(id);
      this.setState({
        redirect: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  markUnmark = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      let { todo } = this.state;
      if (todo.done) {
        todo.done = false;
      } else {
        todo.done = true;
      }
      await todoService.updateTodo(todo);
      todo = await todoService.getTodo(id);
      this.setState({
        todo
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { todo, loading, redirect } = this.state;
    let done;
    let atribute;
    if (todo.done) {
      done = "✔️ Done";
      atribute = true;
    } else {
      done = "❗To do";
      atribute = false;
    }

    return (
      <>
        {loading && <div>Loading...</div>}
        {redirect && (
          <Redirect
            to={{
              pathname: "/todos"
            }}
          />
        )}
        {!loading && (
          <div className="todo">
            <h1 className="header">Task</h1>
            <section className="single-todo">
              <Card
                id={todo._id}
                title={todo.title}
                done={done}
                body={todo.body}
                delete={this.handleTodoDelete}
                check={this.markUnmark}
                atribute={atribute}
              />
            </section>
            <section>
              <Link className="button-medium" to="/todos">Back to list</Link>
            </section>
            <section>
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

export default Task;
