import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap components
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';

const Topbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <LinkContainer to="/"><Navbar.Brand>Ironhack To-Do</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Actions" id="collasible-nav-dropdown">
            <LinkContainer to="/tasks/create"><NavDropdown.Item>Create Task</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/tasks"><NavDropdown.Item>Tasks</NavDropdown.Item></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
