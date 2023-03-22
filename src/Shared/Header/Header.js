import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css'
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
    }
    return (
        <Navbar expand="lg" className='nav-start p-3'>
            <Container>
                <Link className='text-white fs-4 text-decoration-none fw-bolder' to="/">Restaurant Guide</Link>
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
                                    <Link to='/addservice'>Add A Service</Link>
                                    <Button onClick={handleLogOut} variant="light">logout</Button>
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