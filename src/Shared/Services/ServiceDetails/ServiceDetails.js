import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData()
    console.log(serviceDetail)
    return (
        <div>
            <Container>
                <h2 className='my-4'>{serviceDetail.name}</h2>
                <img className='w-100' style={{ 'height': 400 }} src={serviceDetail.img} alt="" />
                <p className='fs-4 mt-3'>Pricer per item: {serviceDetail.price}</p>
                <p className='fs-4 mt-3'>Rating: {serviceDetail.ratings}</p>
                <p className='fs-4 mt-3 mb-5'>{serviceDetail.description}</p>
            </Container>
        </div>
    );
};

export default ServiceDetails;