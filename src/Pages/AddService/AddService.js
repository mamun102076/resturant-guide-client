import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

const AddService = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const image = form.image.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value

        const service = {
            name,
            image,
            price,
            rating,
            description
        }

        fetch('https://resturant-guide-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('service addes successfully')
                }
            })
        form.reset()
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center mb-3'>Add A Service</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Enter url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control name="price" type="text" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control name="rating" type="text" placeholder="Enter rating" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} placeholder="Enter description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Service
                </Button>
            </Form>
        </div>
    );
};

export default AddService;