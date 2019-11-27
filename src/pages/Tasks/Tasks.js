import React, { Component } from 'react'

// API service
import tasks from '../../lib/api-service';

// Bootstrap Components
import {
  Container,
  Row,
  Form,
  Button,
  Modal
} from 'react-bootstrap';

class Tasks extends Component {
  state = {
    tasks: [],
    title: '',
    body: '',
    show: false
  }

  // Show Task Creation modal
  showModal = () => {
    this.setState({
      show: true
    })
  }

  // Hide Task Creation modal
  hideModal = () => {
    this.setState({
      show: false
    })
  }

  // Form submit handler
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      title,
      body
    } = this.state;

    // Call task creation API
    await tasks.create({
      title,
      body
    });

    // Clear the state
    this.setState({
      title: '',
      body: ''
    });
    // Return to Tasks list
    this.props.history.push('/tasks')
  }

  // Form change handler
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render () {
    const {
      title,
      body
    } = this.state;

    return (
      <Container fluid>

        <Row className="controls">
          <h2>Tasks</h2>
          <Button onClick={this.showModal}>Create Task</Button>
        </Row>

        <Row>
          List Tasks here
        </Row>

        { /* Task Creation Modal */ }
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit = { this.handleFormSubmit } id="createTask">
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
            <Button variant="secondary" onClick={this.hideModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.hideModal}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default Tasks;
