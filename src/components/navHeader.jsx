import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/aaa.png";

function NavHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="p-0">
          <img src={Logo} alt="AAA" className="w-28 h-12" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="visible justify-end"
        >
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Work Experience</Nav.Link>
            <Nav.Link href="#deets">Personal Information</Nav.Link>
            <Button variant="outline-warning" className="mx-2">
              Projects
            </Button>
            <Button variant="outline-warning">Get in Touch</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
