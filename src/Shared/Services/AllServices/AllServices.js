import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const allServices = useLoaderData()
    console.log(allServices)
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    {
                        allServices.map(allservice => <ServiceCard allservice={allservice}></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;