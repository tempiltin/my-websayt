
import React, { useEffect } from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from './AuthContect'
import { useNavigate } from 'react-router-dom'
const SignInUser = () => {

    const navigate = useNavigate()
    const { googleSignIn , user } = UserAuth();
    const handleGoogleSignIn = async () => {
        try { await googleSignIn(); navigate('/')
        } catch (error) {console.error(error);}
    }

    useEffect(()=>{
        if(user != null) navigate("/");
    },[navigate, user])

    return (
        <div className="container mt-5">
            <div className="row mt-5 justify-content-around align-content-center">
                <div className="col-auto mt-5 ">
                    <h1 className='mb-4 text-bg-danger align-items-center'>Sign-In</h1>
                    <GoogleButton onClick={handleGoogleSignIn} />
                </div>
            </div>
        </div>
    )
}

export default SignInUser;