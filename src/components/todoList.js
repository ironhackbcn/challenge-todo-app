import React, { Component } from 'react';
import todoService from '../services/todoService';
import TodoCard from '../components/TodoCard';

class todoList extends Component {

  state={
    data:[]
  }

  componentDidMount(){
    this.getTodoList();
  }

  getTodoList = () => {
    todoService.getAllTodos()
      .then(data => {
        this.setState({
          data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <ul>
          {data.map(todo => (
            <TodoCard
              key={todo._id}
              data={todo}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        
      </div>
    );
  }
}

export default todoList;