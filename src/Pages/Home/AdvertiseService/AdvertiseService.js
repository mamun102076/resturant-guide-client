import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdvertiseCard from './AdvertiseCard';
import  './Advertise.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const AdvertiseService = () => {
    const { loading } = useContext(AuthContext)
    const [advertises, setAdvertises] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addservice')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdvertises(data)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='advertise py-4'>
            <h2 className='text-center mb-4'>Advertised Services</h2>
            <Container>
                <Row>
                    {
                        advertises.map(advertise => <AdvertiseCard key={advertise._id} advertise={advertise}></AdvertiseCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AdvertiseService;