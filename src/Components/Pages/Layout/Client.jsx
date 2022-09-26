import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Client/NavbarClient/Navbar'

const Client = () => {
    return (
        <>
        
        <Navbar />
         <CssBaseline />
        <Outlet />
        </>
       )
}

export default Client;