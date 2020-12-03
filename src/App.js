import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import List from "./Components/List.js";
import NewProduct from "./Components/NewProduct.js";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/todos" component={NewProduct} />
        <Route exact path="/todos/:id" component={NewProduct} />
        <Route exact path="/newProduct" component={NewProduct} />
        <Route exact path="/newProduct/:id" component={NewProduct} />
      </Switch>
    </div>
  );
}

export default App;