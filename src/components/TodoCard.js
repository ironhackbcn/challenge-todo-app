import React from 'react';
import Button from '../components/Button';

function TodoCard(props) {
  const { key, title, body, remove } = props;
  return (
    <div>
      <div className='todo-card' key={key} >
        <p><strong>{title}</strong></p>
        <p>{body}</p>
        <Button myProp={remove}>
          Delete
        </Button>
        {/* <button className='todo-button'  */}
      </div>
    </div>
  );
}

export default TodoCard;