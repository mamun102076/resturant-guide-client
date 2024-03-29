import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser,handleGoogleSignIn,updateUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    useTitle('Register')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const fullname = form.fullname.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                const userInfo = {
                    displayName: fullname,
                    photoURL: photourl
                }
                updateUser(userInfo)
                .then(() => {
                    form.reset()
                    navigate('/')
                })
                .catch(error => console.log(error))
            })
            .catch(err => console.error(err))
    }
    const handleGoogle = () => {
        handleGoogleSignIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate('/')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='my-5 w-75 mx-auto'>
            <h2 className='text-center mb-4'>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control name='fullname' type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photourl' type="text" placeholder="Enter PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='text-center fs-4 text-muted'><small>--------------- or -----------------</small></p>
            <div className='my-4'>
                <Button onClick={handleGoogle} className='fw-semibold fs-5 w-100' variant="outline-danger">Sign Up With Google</Button>
            </div>
        </div>
    );
};

export default SignUp;