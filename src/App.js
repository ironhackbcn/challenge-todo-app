import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Body from './components/Body';

class App extends Component {
  state = {
    data: [],
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Form />
        {/* <Body data={data}/> */}
        <Body />
        {data.map(data => {
          return (
            <div>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
