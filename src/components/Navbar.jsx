import React from "react";
import { Link } from "react-router-dom"; 
import { Container, Nav, Navbar as Menu } from "react-bootstrap";

const Navbar = () => {
  return (
    <Menu expand="lg" className="bg-body-tertiary">
      <Container>
        <Menu.Brand href="#home">React-Bootstrap</Menu.Brand>
        <Menu.Toggle aria-controls="basic-navbar-nav" />
        <Menu.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display: 'flex' , gap: '10px'}}>
            <Link to="/">Home</Link>
            <Link to="/courses">courses</Link>
          </Nav>
        </Menu.Collapse>
      </Container>
    </Menu>
  );
};

export default Navbar;
