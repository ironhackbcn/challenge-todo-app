import React, { Component } from "react";
import service from "./../lib/service.js";
import { Link } from "react-router-dom";

class ToDoDetails extends Component {
  state = {
    toDo: {},
  };

//   To call the To Do from the server
  getToDo = async () => {
    const id = this.props.match.params.id;
    const toDo = await service.getToDo(id);
    this.setState({
      toDo: toDo,
    });
  };
  
//   To call the previous function everytime the component/page is mouunted
  componentDidMount = () => {
    this.getToDo();
  };

//   Function to delete the To Do
  deleteToDo = async () => {
    const id = this.props.match.params.id;
    await service.deleteToDo(id);
    this.props.history.goBack();
  };

  render() {
    const { toDo } = this.state;
    return (
      <div>
        <div>
          <h2>To do details</h2>
          <h3>{toDo.title}</h3>
          <p>{toDo.body}</p>
        </div>

        <Link to={`/todos/edit/${toDo._id}`}>Edit To Do</Link>
        <button onClick={this.deleteToDo}>Delete To Do</button>
      </div>
    );
  }
}

export default ToDoDetails;
