import React, { Component } from 'react'

// API service
import tasks from '../../lib/api-service';

// Components
import List from '../../components/Tasks/List';

// Bootstrap Components
import {
  Container,
  Row,
  Form,
  Button,
  Modal,
  Table
} from 'react-bootstrap';

class Tasks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tasks: [],
      title: '',
      body: '',
      show: false
    }
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

    // Close Modal and return to Tasks list
    this.hideModal();
    // TODO: Not realoading the state in time, can't see new issues without reloading
    this.props.history.push('/tasks');
  }

  // Form change handler
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount () {
    // Call tasks list API
    tasks.list().then(
      response => {
        const tasks = response.data;
        if (tasks.length > 0) {
          this.setState({ tasks });
        }
      }
    ).catch(error => console.log(error));
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

        <Row className="task-list">
          <Table responsive className="table" striped hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.map((task, index) =>
                  <List
                    key = { index }
                    id = { task._id }
                    title = { task.title }
                    description = { task.description }
                    status = { task.status }
                  />
                )
              }
            </tbody>
          </Table>
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
            <Button variant="primary" type="submit" form="createTask" disabled={!title}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Tasks;
