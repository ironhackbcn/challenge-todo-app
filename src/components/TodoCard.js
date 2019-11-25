import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function TodoCard(props) {
  const { key, id, title, body, remove, edit } = props;
  return (
    <div className='todo-card' key={key}>
      <Link
        to={{
          pathname: `/${id}`,
          props: {
            key: { key },
            id: { id },
            title: { title },
            body: { body }
          }
        }}
      >
        {title}
      </Link>

      <p>{body}{key}</p>
      <Button myProp={remove}>
        Delete
      </Button>
      <Button myProp={edit}>
        Edit
      </Button>
      
    </div>
  );
}

export default TodoCard;