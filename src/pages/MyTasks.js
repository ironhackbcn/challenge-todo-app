import React, { Component } from 'react';

import MyTaskList from '../components/MyTasksList';
import myTaskService from '../lib/mytasks-service';

import { Container } from '../styles/global'



export class MyTasks extends Component {

    state = {
        listOfMyTasks: []
      };

      getMyTaskHandler = (_id) => {
    
        myTaskService.getAllTodos()
        .then( (AllMyTodos) => {
          
          this.setState({listOfMyTasks : AllMyTodos})
          
        })
        .catch( (err) => console.log(err));
      }
    



    render() {
        return (
        <Container>
        <h1>My Task page</h1>
        <MyTaskList myTasks={this.state.listOfMyTasks}/>

        </Container>
        );
    }
}



export default MyTasks;