import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center text-lg-left'>
            <div className='text-center p-3'>
                &copy; Copyright:
                <a className='text-dark' href='#'>
                    Restaurant Guide
                </a>
            </div>
        </footer>
    );
};

export default Footer;