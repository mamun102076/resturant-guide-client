import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData()
    console.log(serviceDetail)
    return (
        <div>
            <h2>{serviceDetail.name}</h2>
            <img className='w-100' style={{'height': 400}} src={serviceDetail.img} alt="" />
            <p>{serviceDetail.price}</p>
            <p>{serviceDetail.ratings}</p>
            <p>{serviceDetail.description}</p>
        </div>
    );
};

export default ServiceDetails;