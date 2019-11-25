import React from 'react';
import EditForm from '../components/EditForm';

const ToDoCardDetail = (props) =>{
  const { _id, title, body } = props.location.props.todo.todo;

    return (  
      <div>
        <h1>Editando todo</h1>

        <EditForm 
          id = {_id}
          title = {title}
          body = {body}
        />
      </div>
    );
  
}

export default ToDoCardDetail;