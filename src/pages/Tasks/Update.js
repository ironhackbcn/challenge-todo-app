import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// API service
import tasks from '../../lib/api-service';

// Bootstrap Components
import {
  Container,
  Button,
  Modal,
  Form
} from 'react-bootstrap';

class Update extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: '',
      body: ''
    }
  }

  // Form submit handler
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      id,
      title,
      body
    } = this.state;
    console.log(id)

    // Call task update API
    await tasks.update({
      id,
      title,
      body
    });

    // Return to Tasks list
    // TODO: Not realoading the state in time, can't see new issues without reloading
    this.props.history.push('/');
  }

  // Form change handler
  handleChange = (event) => {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount () {
    // Call get task API
    const { id } = this.props.match.params;
    tasks.get(id).then(
      response => {
        const task = response.data;
        this.setState({
          title: task.title,
          body: task.body
        });
        console.log(this.state)
      }
    ).catch(error => console.log(error));
  }

  render() {
    const {
      title,
      body
    } = this.state;

    return (
      <Container fluid>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Update Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit = { this.handleFormSubmit } id="updateTask">
              <Form.Group controlId = "title" >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type = "text"
                  name = "title"
                  value = { title }
                  onChange = { this.handleChange }
                  required
                />
              </Form.Group>

              <Form.Group controlId = "body" >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as = "textarea"
                  rows = "8"
                  name = "body"
                  value = { body }
                  onChange = { this.handleChange }
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <LinkContainer to="/">
              <Button variant="secondary">
                Cancel
              </Button>
            </LinkContainer>
            <Button variant="primary" type="submit" form="updateTask" disabled={!title}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    );
  }
}

export default Update;
