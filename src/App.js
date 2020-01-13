import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar'
import Cards from './components/Cards';
import authService from './lib/auth-service'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cards: []
    }
    authService.getall({})
        .then( (data) => this.setState({cards: data}))
        .catch( (err) => console.log(err));
 }
  updateCards = () => {
    authService.getall({})
        .then( (data) => this.setState({cards: data}))
        .catch( (err) => console.log(err));
 }
  render() {
    return (
      <div className="App">
          <Topbar
            updateCards = {this.updateCards}
          />
          <Cards
            cards = {this.state.cards}
            updateCards = {this.updateCards}
          />
      </div>
    );
  }
}

export default App;
