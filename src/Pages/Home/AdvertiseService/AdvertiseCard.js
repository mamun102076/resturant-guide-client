import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AdvertiseCard = ({ advertise }) => {
    const { name, image, price, rating, description } = advertise
    return (
        <Col lg="4">
            <Card className='mb-3'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <Card.Img src={image} className='img=fluid' />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p><span className='fw-bold'>Price:</span> {price}$</p>
                        <p><span className='fw-bold'>Rating:</span> {rating}</p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AdvertiseCard;