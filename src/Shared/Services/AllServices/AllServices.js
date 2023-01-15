import React from 'react';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const allServices = useLoaderData()
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
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