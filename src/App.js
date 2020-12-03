import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AnonList from './pages/AnonList';
import EditTask from './pages/EditTask';
import TaskDetails from './pages/TaskDetails';

class App extends Component {
  render() {
    return (
      <AuthProvider>
      {/* //Pondremos un div con un className "container" que engloble a los componentes */}
        
        {/* //Renderizamos el componente Navbar para mostrarlo en todas las página */}
        
          {/* //Usaremos Switch para englobar las rutas */}
          <Switch>
          {/*Por último, usamos el componente AnonRoute y PrivateRoute para añadirle un exact path y asignarles los componentes,
            así como Signup y Login tienen que ser rutas públicas, Private tiene que ser una ruta privada*/}
            <Route exact path='/' component={Home}/>
            <AnonRoute exact path='/signup' component={Signup}/>
            <AnonRoute exact path='/login' component={Login}/>
            <PrivateRoute exact path='/profile' component={Profile}/> 
            <AnonRoute exact path='/anonList' component={AnonList}/> 
            <AnonRoute exact path='/editTask/:id' component={EditTask}/>
            <AnonRoute exact path='/taskDetails/:id' component={TaskDetails}/>
            
            
            
          </Switch>
       
      </AuthProvider>
         
    );
  }
}

export default App;
