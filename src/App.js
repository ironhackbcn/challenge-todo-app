import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

// Bootstrap Components
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

// Components
import Topbar from './components/Topbar/Topbar';

// Pages
import Tasks from './pages/Tasks/Tasks';

class App extends Component {
  render() {
    return (
      <>
        <Topbar />
        <Container fluid>
          <Switch>
            <Route path="/tasks" component={Tasks} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
