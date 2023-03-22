import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer class="text-center">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3><Link to='/'>Restaurant Guide.Com</Link></h3>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <div>
                            <ul className='d-lg-flex d-md-flex d-sm-flex justify-content-center'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/signup'>SignUp</Link></li>
                                <li><Link to='/login'>LogIn</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                        <ul className='d-lg-flex d-md-flex d-sm-flex justify-content-center'>
                                <li><a href="https://www.linkedin.com/in/abdullah-al-mamun-664015145/" target={'_blank'} rel="noreferrer"><BsLinkedin /></a></li>
                                <li><a href="https://github.com/mamun102076?tab=repositories"  target={'_blank'} rel="noreferrer"><BsGithub /></a></li>
                                <li><a href="mailTo:mamun102076@gmail.com" target={'_blank'} rel="noreferrer"><MdEmail /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p className='mb-0 p-2'>© 2022 Ordinary Media, LLC. All Rights Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;