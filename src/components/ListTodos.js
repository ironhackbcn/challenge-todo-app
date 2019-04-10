import React, { Component } from 'react';
import TodoCard from './TodoCard';
import todoService from '../lib/todo-services';
import FormCreateTodo from './FormCreateTodo';

class ListTodos extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    this.getTodoList();
  }

  
  getTodoList = async () => {
    await todoService.getAll()
      .then(data => {
        this.setState({
          data: data
        })
      })
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <FormCreateTodo getTodoList={this.getTodoList}/>
        <div className="list-todos">
          {data.map(todo => (
            <TodoCard
              key={todo._id}
              todo={todo}
              getTodoList={this.getTodoList}
            />))}
        </div>
      </div>
    );
  }
}

export default ListTodos;