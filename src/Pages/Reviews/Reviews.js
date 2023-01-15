import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import Loading from '../../Shared/Loading/Loading';
import { Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const { loading } = useContext(AuthContext)
    const data = useLoaderData()



    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch(`https://resturant-guide-server.vercel.app/review/${data?._id}`)
            .then(res => res.json())
            .then(result => {
                setReviewData(result)
            })
    }, [data?._id])

    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const comment = form.comment.value

        const review = {
            serviceName: data.name,
            userName: user?.displayName,
            userEmail: user?.email,
            image: user?.photoURL,
            userComment: comment,
            serviceId: data._id
        }
        fetch('https://resturant-guide-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('review added successfully')
                }
            })
    }

    console.log(reviewData)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='my-5'>
                <Container>
                    <Row>
                        {
                            reviewData &&
                            reviewData?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </Row>
                </Container>
            </div>
            <div className='text-center my-5'>
                <h3>Add A Review</h3>
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Add A Review
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Service Title: {data.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Type Review:</Form.Label>
                                    <Form.Control name="comment" as="textarea" rows={3} />
                                </Form.Group>
                                <Button onClick={handleClose} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
            </div>
        </div>
    );
};

export default Reviews;