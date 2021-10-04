import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/importance">Importance</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <div className="bg-header">
            <h1>Dance GURU</h1>
            <h3>Let's learn to Dance</h3>
        </div>
        </div>
    );
};

export default Header;