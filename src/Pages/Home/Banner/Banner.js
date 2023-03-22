import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img from '../../../assests/brands/img2.png'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid className='banner-top'>
            <Row>
                <Col xs='auto'>
                    <card className='banner-item'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <Card.Img src={img} className='img=fluid' />
                            </PhotoView>
                        </PhotoProvider>
                    </card>
                </Col>
                <Col>
                    <Card.Body className='text-white'>
                        <Card.Text>
                            <p className='triangle-down'>Hello,There</p>
                            <h1>I'm Maria</h1>
                            <p className='summery'>I am a professional guide for helping you to find the best restaurant around the world.</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;