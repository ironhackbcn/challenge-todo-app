import React, { Component } from 'react';

// import MyTaskList from '../components/MyTasksList';
import myTaskService from '../lib/mytasks-service';
import { Button } from './../styles/elements'
import { Container } from '../styles/global'
import   view  from './../images/view.svg'




export default class MyTasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         listOfMyTasks: []
        //   isFormShowing: false,
        //   isButtonShowing: true
        };
      }
    
      handleGetTasks = () => {
        
        myTaskService.allMyTodos()
        .then((AllMyTodos) => {
          
          this.setState({listOfMyTasks : AllMyTodos})
        })
        .catch((error) => console.log(error))
      }
        


  render() {
        console.log(this.state)
    return (
        
      <>
      <Button onClick={this.handleGetTasks}>
      <img src={ view } alt= "user" width= "45" />
      View Sign Cards
      </Button>
      
      <Container>
      
      {/* <MyTaskList myTasks={this.state.listOfMyTasks} handleGetTasks={this.handleGetTasks} /> */}

     </Container>
      </>
    );
  }
}
