import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData()
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='my-4'>{serviceDetail.name}</h2>
                        <img className='w-100' style={{ 'height': 400 }} src={serviceDetail.img} alt="" />
                        <p className='fs-4 mt-3'>Pricer per item: {serviceDetail.price}</p>
                        <p className='fs-4 mt-3'>Rating: {serviceDetail.ratings}</p>
                        <p className='fs-4 mt-3'>{serviceDetail.description}</p>
                        <div className='text-center mt-4'>
                            <Link to={`/reviews/${serviceDetail._id}`}><Button className='fw-bold' variant="info">See Reviews</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;