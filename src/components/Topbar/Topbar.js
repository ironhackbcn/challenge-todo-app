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
    </Navbar>
  );
}

export default Topbar;
