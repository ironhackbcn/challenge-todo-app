import React from 'react';
import Button from '../components/Button';

function ToDoRemove(props) {
  const { key, remove } = props;
  return (
    <div key={key}>
      <Button myProp={remove}>
        Delete
      </Button>
    </div>
  );
}

export default ToDoRemove;