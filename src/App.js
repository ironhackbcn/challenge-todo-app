import React, { Component } from 'react';
import './App.scss';

// import components
import ItemsList from './components/ItemsList';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>TO DO LIST</h1>
        <button>Add item</button>
        <AddItem />
        <ItemsList />
      </main>
    );
  }
}

export default App;
