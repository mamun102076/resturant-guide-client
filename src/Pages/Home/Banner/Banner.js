import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img from '../../../assests/brands/img2.png'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid className='banner-top'>
            <Row>
                <Col xs='auto'>
                    <card className='banner-item'>
                        <Card.Img src={img} className='img=fluid' />
                    </card>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>Hello,</Card.Title>
                        <Card.Text>
                            I am maria.I am a professional guide for finding the best restaurant around the area.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;