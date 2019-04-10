import React, { Component } from 'react';
import Footer from '../components/Footer';
import TodoList from '../components/todoList';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>welcome todo list</h1>
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default Home;