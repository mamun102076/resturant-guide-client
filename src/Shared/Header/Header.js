import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css'
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
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
                        <>
                            {
                                user?.email ? 
                                <>
                                    {user.email} 
                                    <Button variant="light">logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Signup</Link>
                                </>
                            }
                        </>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;