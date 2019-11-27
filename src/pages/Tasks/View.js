import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// API service
import tasks from '../../lib/api-service';

// Bootstrap Components
import {
  Container,
  Button,
  Modal
} from 'react-bootstrap';

class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      task: {}
    }
  }

  componentDidMount () {
    // Call get task API
    const { id } = this.props.match.params;
    tasks.get(id).then(
      response => {
        const task = response.data;
        this.setState({
          task: task
        });
      }
    ).catch(error => console.log(error));
  }

  render() {
    return (
      <Container fluid>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h2>{ this.state.task.title }</h2>
          <p>{ this.state.task.body }</p>
        </Modal.Body>

        <Modal.Footer>
          <LinkContainer to="/"><Button variant="secondary">Close</Button></LinkContainer>
        </Modal.Footer>
      </Modal.Dialog>
      </Container>
    );
  }
}

export default View;
