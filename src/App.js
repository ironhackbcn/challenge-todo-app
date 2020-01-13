import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// ------ CSS + IMAGES ----- ///
import { Main } from './styles/global'

// ------ TODO PAGES + COMPONENTS ----- ///
import Home from './pages/Home';
import MyTasks from './pages/MyTasks';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

      <Main>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mytasks" component ={MyTasks}/> 
        </Switch>

        </Main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
