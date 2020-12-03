import React, { Component } from "react";
import AddToDoForm from "../components/AddToDoForm.js";
import ToDoesList from "../components/ToDoesList.js";
import service from "./../lib/service.js";

class Home extends Component {
  state = {
    listOfToDoes: [],
    isAddingToDo: false,
  };

//   Method to render all the TO DOES
  getAllToDoes = async () => {
    const list = await service.getAllToDoes();
    this.setState({
      listOfToDoes: list,
    });
  };

//   To call the function getAllToDoes always when the page/component is mounted
  componentDidMount = () => {
    this.getAllToDoes();
  };

  //   To call the function getAllToDoes always when the page/component is updated
  componentDidUpdate = () => {
    this.getAllToDoes();
  };

  // Function to show the form for adding a new To Do
  showForm = () => {
    this.setState({
      isAddingToDo: true,
    });
  };

  // Function to hide the adding form
  hideForm = () => {
    this.setState({
      isAddingToDo: false,
    });
  };

  render() {
    //   console.log("list", this.state.listOfToDoes)
    return (
      <div>
        <header className="home-header">
          <h2>List of To Does</h2>
        </header>

        <main className="home-main">
        {/* Component to render all the To Does */}
          <ToDoesList listOfToDoes={this.state.listOfToDoes} />

          {/* To change the message of the button according to the state of the page */}
          {this.state.isAddingToDo ? (
            <button onClick={this.hideForm}>Hide form</button>
          ) : (
            <button onClick={this.showForm}>Add To Do</button>
          )}

          {/* Show or Hide the form */}
          {this.state.isAddingToDo ? <AddToDoForm /> : null}
        </main>
      </div>
    );
  }
}

export default Home;
