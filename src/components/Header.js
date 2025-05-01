import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="home" {...scrollProps} style={{cursor: 'pointer'}}>
            My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" {...scrollProps}>Home</Nav.Link>
            <Nav.Link as={Link} to="resume" {...scrollProps}>Resume</Nav.Link>
            <Nav.Link as={Link} to="portfolio" {...scrollProps}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="contact" {...scrollProps}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 