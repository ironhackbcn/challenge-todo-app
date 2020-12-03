import React, { Component } from "react";
import AddToDoForm from "../components/AddToDoForm.js";
import ToDoesList from "../components/ToDoesList.js";
import service from "./../lib/service.js";

class Home extends Component {
state = {
    listOfToDoes: [],
    isAddingToDo: false,
}

  getAllToDoes = async () => {
    const list = await service.getAllToDoes();
    this.setState({
      listOfToDoes: list
    });
  };

  componentDidMount = () => {
    this.getAllToDoes();
  };

  componentDidUpdate = () => {
    this.getAllToDoes();
  };

  showForm = () => {
      this.setState({
          isAddingToDo: true,
      })
  }

  hideForm = () => {
    this.setState({
        isAddingToDo: false,
    })
}

  render() {
    //   console.log("list", this.state.listOfToDoes)
    return <div>
        <h2>List of To Does</h2>

        <ToDoesList listOfToDoes={this.state.listOfToDoes} />

        { this.state.isAddingToDo ? <button onClick={this.hideForm}>Hide form</button> : <button onClick={this.showForm}>Add To Do</button> }
        { this.state.isAddingToDo ? <AddToDoForm /> : null }
    </div>;
  }
}

export default Home;
