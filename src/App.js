import React, { Component } from "react";
import "./styles/css/style.css";
import "./components/TodoCard";
import TodoCard from "./components/TodoCard";
import "./lib/api-service";
import apiService from "./lib/api-service";

class App extends Component {
  state = {
    allTodos: [],
    title:"",
    description:"",
   
  };

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    apiService.getAllTodos().then((response) => {
      const allTodos = response.data;

      console.log(allTodos);

      this.setState({
        allTodos: allTodos,
      });
    });
  };

  handleInput=(event)=>{
    const {name,value}=event.target;
    
    this.setState({[name]:value})
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const {title,description}=this.state;
    console.log(title,description)
    apiService.createTodo(title,description)
      .then((response)=>{
        this.setState({
          title:"",
          description:""
        })
         this.getAllTodos();
      })


  }

  toggleCreate=()=>{
    this.form.classList.toggle("open")
  }

  render() {
    return (
      <div className="todo-list">
        <h1>Todo-list</h1>
        <button className="create-todo-btn" onClick={this.toggleCreate} >CREATE TODO</button>

        <form className="create-todo-form" onSubmit={this.handleSubmit} ref={(form) => (this.form = form)}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
          </div>

          <div>
            <label>Description: </label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleInput}/>
          </div>
          <button>SUBMIT</button>
        </form>

        <div className="todo-list-container">
          {this.state.allTodos.map((todo) => {
            return (
              <TodoCard
                key={todo._id}
                todo={todo}
                getAll={this.getAllTodos}
              ></TodoCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
