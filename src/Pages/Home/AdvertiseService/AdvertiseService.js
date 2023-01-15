import React from 'react';
import { useEffect } from 'react';

const AdvertiseService = () => {
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            AdvertiseService
        </div>
    );
};

export default AdvertiseService;