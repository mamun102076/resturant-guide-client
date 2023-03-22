import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Services from '../../Shared/Services/Services';
import About from './About/About';
import AdvertiseService from './AdvertiseService/AdvertiseService';
import Banner from './Banner/Banner';
import FAQ from './FAQ/FAQ';
import './Home.css'

const Home = () => {
    const services = useLoaderData()
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div className='home-services my-5'>
                <h2 className='text-center my-4'><i>My recommended restaurants</i></h2>
                <Container>
                    <Row>
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                    </Row>
                </Container>
                <div className='text-center text-success mt-4'>
                    <Button className='service-btn' variant="primary"><Link to="/allservices"  className='text-light fs-4'>See all resturants</Link></Button>
                </div>
            </div>
            <AdvertiseService></AdvertiseService>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;