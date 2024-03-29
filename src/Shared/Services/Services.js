import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = ({ service }) => {
    var { _id, name, img, description, price, ratings } = service
    return (
        <Col lg='4'>
            <Card className='service-item mb-4'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.length > 100 ? description.slice(0, 100) : description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p>Price: {price}</p>
                        <p>Rating: {ratings}</p>
                    </div>
                    <Button className='service-button'><Link to={`/servicedetails/${_id}`} className='text-light'>See details</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;