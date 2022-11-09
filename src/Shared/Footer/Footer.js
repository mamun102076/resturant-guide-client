import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center text-lg-left'>
            <div className='text-center p-3'>
                &copy; Copyright:
                <Link className='text-dark'>Restaurant Guide</Link>
            </div>
        </footer>
    );
};

export default Footer;