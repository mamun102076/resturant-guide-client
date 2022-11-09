import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(app)
const auth = getAuth()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const handleGoogleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {user,createUser,handleSignIn,handleGoogleSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;