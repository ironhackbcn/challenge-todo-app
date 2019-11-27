import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// API service
import tasks from '../../lib/api-service';

// Bootstrap Components
import {
  ButtonGroup,
  Button,
} from 'react-bootstrap';

const List = (props) => {
  return (
    <tr>
      <td><Link to={ '/' + props.id }>{props.title}</Link></td>
      <td>{props.status}</td>
      <td className="actions">
        <ButtonGroup aria-label="Basic example">
          <LinkContainer to={ '/' + props.id }><Button variant="primary">View</Button></LinkContainer>
          <Button variant="secondary">Mark Complete</Button> { /* TODO: Mark complete function */}
          <Button variant="danger" onClick={ () => tasks.delete(props.id) }>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default List;
