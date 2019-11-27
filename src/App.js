import React, { Component } from 'react';
import TodoInput from '../src/components/TodoInput'
import TodoList from '../src/components/TodoList'
import './App.css';



class App extends Component {
 
  render() {
    return (
         <main className="main">
         <TodoList ></TodoList>
         <TodoInput/>

        </main>
     

    );
  }
}

export default App;
