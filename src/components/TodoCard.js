import React, { Component } from 'react';
import todoService from '../lib/todo-services';

class TodoCard extends Component {

  state = {
    title: this.props.todo.title,
    body: this.props.todo.body,
    showEdit: false,
    isDone: this.props.todo.isDone
  }

  handleDelete = (e) => {
    e.preventDefault();
    todoService.deleteOne(this.props.todo._id)
      .then(message => {
       this.props.getTodoList();
      })
  }

  showFormEdit = (e) => {
    e.preventDefault();
      this.setState({
        showEdit: true
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    todoService.edit(this.props.todo._id, { title, body })
      .then(() => {
        this.setState({
          showEdit: false
        })
        this.props.getTodoList();
      })
      .catch((data) => {})
  }

  handleChange = (event) => {

    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    const { title,body,isDone } = this.state;
    return (
      <div>
        <div className="todo-card">
          {this.state.showEdit
                  ? <> 
                      <form onSubmit={this.handleFormSubmit}>
                      <div>
                        <label>Título</label>
                        <input name="title" value={title} onChange={this.handleChange} />
                      </div>
                      <div>
                        <label>Descripción</label>
                        <input name="body" value={body} onChange={this.handleChange} />
                     </div>
                     <div>
                        <input type="checkbox" name="done" value={isDone} onChange={this.handleChange} /> Realizado
                     </div>
                        <input  type="submit" value="Aplicar Cambios" />
                      </form> 
                    </> : 
                    <>
                      <h3>{this.props.todo.title}</h3>
                      <p>{this.props.todo.body}</p>
                      <button  onClick={this.showFormEdit}>Editar Tarea</button>
                      <button  onClick={this.handleDelete}>Eliminar Tarea</button>
                    </>
        }
        
        </div>
      </div>
    );
  }
}

export default TodoCard;