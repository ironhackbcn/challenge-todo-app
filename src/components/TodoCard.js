import React, { Component } from "react";
import apiService from "./../lib/api-service";
export default class TodoCard extends Component {
  state = {
    title:"",
    description:""
  };

  componentDidMount(){
    this.setState({
      title:this.props.todo.title,
      description:this.props.todo.body
    })
  }
  deleteTodo = () => {
    apiService.deleteTodo(this.props.todo._id).then((response) => {
      this.props.getAll();
    });
  };

  showUpdate = () => {
    this.form.classList.add("open")
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const {title,description}=this.state;
    const id = this.props.todo._id;
    apiService.updateTodo(id,title,description)
     .then((response)=>{
      this.form.classList.remove("open")
      this.props.getAll()
     })

  };

  handleChange=(event)=>{
    const { name, value } = event.target;
    // console.log(name,value)
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="todo-card">
        <div className="todo-info">
          <p>Title: {this.props.todo.title}</p>
          <p>{this.props.todo.body}</p>
        </div>
        
        <div className="buttons">
        <button onClick={this.showUpdate}>UPDATE</button>
        <button onClick={this.deleteTodo}>DELETE</button>
        </div>
        

        <div className="form-container"  ref={(form) => (this.form = form)}>
        <form onSubmit={this.handleUpdate}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <button>SUBMIT</button>
        </form>
        </div>
        
      </div>
    );
  }
}
