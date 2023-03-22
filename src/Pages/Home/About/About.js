import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className='about-page'>
            <Container fluid>
                <Row>
                    <Col className='left-col' xs="12" md="6" lg="6">
                        <div className='about-left'>
                            <p>Why choose me ?</p>
                        </div>
                    </Col>
                    <Col className='right-col'>
                        <div className='about-right'>
                            <p>Over the years, I have travelled many countries experienced various types of foods in various resturants.I feel great fit for this position.I know people like to taste different foods but most of them don't know which resturants are good or bad.So i decieded to give people the choice from my experience.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;