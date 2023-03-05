import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div style={{backgroundColor: 'powderblue'}}>
            <Container>
                <h2 className='text-center py-4'>More about me</h2>
                <Accordion className='pb-5' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>How to find me ?</h4></Accordion.Header>
                        <Accordion.Body>
                            My address is 225/k Jatrabari dhaka.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h4>How much i charge ??</h4></Accordion.Header>
                        <Accordion.Body>
                            I have premium packkages.i charge per package 100$USD.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h4>How many resturants i have visited ??</h4></Accordion.Header>
                        <Accordion.Body>
                            More over 2000+ around the world
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default FAQ;