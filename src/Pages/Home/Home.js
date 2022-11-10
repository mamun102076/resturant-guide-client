import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../../Shared/Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import FAQ from './FAQ/FAQ';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='home-services my-5'>
                <h2 className='text-center mb-5'>My recommended restaurants</h2>
                <Container>
                    <Row>
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                    </Row>
                </Container>
                <div className='text-center text-success'>
                    <Button variant="primary"><Link to="/allservices"  className='text-light fs-4'>see all resturants</Link></Button>
                </div>
            </div>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;