import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Smart Camera</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link  to="/home#products">Services</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {user?.email?
                             <Button onClick={logOut} variant='light'>Logout</Button>: 
                             <Nav.Link as={Link} to="/login" className='btn btn-dark text-light'>Login</Nav.Link>}
                        </Nav>
                        <Nav>
                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
};

export default Navigation;