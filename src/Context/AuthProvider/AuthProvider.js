import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(app)
const auth = getAuth()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const handleSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser,userInfo)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
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
    const authInfo = {user,createUser,handleSignIn,updateUser,handleGoogleSignIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;