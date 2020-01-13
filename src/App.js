import React, { Component } from 'react';
import './App.scss';

// import components
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

class App extends Component {

  state = {
    showForm: false
  }

  formToggle = () => {
    const toggle = !this.state.showForm;
    this.setState({showForm: toggle})
  }
  render() {
    return (
      <main className="App">
        <h1>TO DO LIST</h1>
      
        {
          this.state.showForm 
          ? (
            <div>
              <button className="btn btn--add" onClick={this.formToggle}>Cancel</button>
              <AddTask /> 
            </div>  
          )
          : <button className="btn btn--add" onClick={this.formToggle}>Add task</button>
        }
        
        <TasksList />
      </main>
    );
  }
}

export default App;
