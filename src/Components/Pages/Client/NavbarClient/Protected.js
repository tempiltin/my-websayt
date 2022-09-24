import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../../Context/AuthContect'
const Protected = () => {

 const {user} = UserAuth();

 if(!user){
    return <Navigate to={"/sign-in"}   />
 }

}

export default Protected