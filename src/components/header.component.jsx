import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/createTODO">Create ToDo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/listTODO">List ToDo</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
