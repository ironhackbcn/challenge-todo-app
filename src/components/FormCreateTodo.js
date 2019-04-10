import React, { Component } from 'react';
import todoService from '../lib/todo-services';


// Clase para crear con un formulario de un todo
class FormCreateTodo extends Component {
  state = {
    title: "",
    body: "",
  }

  // Entra aqui al presionar crear todo en el formulario
  handleFormSubmit = (event) => {
    event.preventDefault();
    
    const { title, body } = this.state;
    // se envian los datos introducidos a todoService
    todoService.create({ title, body })
      .then((data) => {
        this.props.getTodoList();
      })
      .catch((data) => {
       
      })
  }

  //funcion que registra todo lo que intriducimos en los campos input y lo introduce el el campo que corresponda del state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <>
      
        <div >
          <div>
            <h1>Añade una tarea a la lista!</h1>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            <div >
              <input type="text" placeholder="Introduce el título del todo" name="title" value={title} onChange={this.handleChange} />
            </div>
            <div>
              <input name="body" placeholder="Descripción del todo" value={body} onChange={this.handleChange} />
            </div>
            <footer>
              <input type="submit" value="Crear nueva tarea" />
            </footer>
          </form>
          
        </div>
      </>
    );
  }
}

export default FormCreateTodo;