import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServiceCard = ({allservice}) => {
    var {_id,name,img,description,price,ratings} = allservice
    return (
        <Col lg='4'>
            <Card className='mb-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.length>100 ? description.slice(0,100): description }
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p>Price: {price}</p>
                        <p>Rating: {ratings}</p>
                    </div>
                    <Button variant="primary"><Link to={`/servicedetails/${_id}`}className='text-light'>See details</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;