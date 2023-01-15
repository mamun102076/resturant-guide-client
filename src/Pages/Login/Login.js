import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const {handleSignIn} = useContext(AuthContext)
    const navigate = useNavigate() 
    const [loginError,setLoginError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useTitle('Login')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        handleSignIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message)
        })
    }
    return (
        <div className='my-5 w-50 mx-auto'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p>{loginError}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;