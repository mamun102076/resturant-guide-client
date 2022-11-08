import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg" className='bg-danger'>
            <Container>
                <Navbar.Brand className='text-white' href="#">Restaurant Guide</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navBar ms-auto my-2 my-lg-0" navbarScroll>
                        <Link variant="primary" to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;