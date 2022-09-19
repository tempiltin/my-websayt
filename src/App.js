// import React,{useState,useEffect} from "react"
// import  firebase  from './db/config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './Components/Pages/Layout/Layout';
import ClientForIndex from './Components/Pages/Client/ClientForIndex';
import Contact from './Components/Pages/Contact';
import LoginReg from './Components/Pages/Auth/LoginReg';
import SendPasswordResetEmail from './Components/Pages/Auth/SendPasswordResetEmail';
import ResetPasword from './Components/Pages/Auth/ResetPasword';
import AdminLayout from './Components/Pages/Layout/AdminLayout';
import HomePage from './Components/Pages/Admin/HomePage';
import Client from './Components/Pages/Layout/Client';
import ClientForWebPage from './Components/Pages/Client/ClientForWebPage';
// import ClientLogin from "./Components/ClientLogin";
import { useState } from 'react';


const App = () => {
  // const [user , setUser] = useState(null);
  // useEffect(()=>{
  //   firebase.auth().onAuthStateChanged(user =>{
  //     setUser(user)
  //   },[])
  // })
  const [load , setLoad] = useState(false)

 window.addEventListener("load",()=>{
  setLoad(true)
 })

 
  return (
   <>
     <div className={load ? "loadtrue true" : "loadfalse false"}><h4 className='load'>Loading ...</h4></div>
      <BrowserRouter>
        <Routes >
        <Route path={'/'} element={<Client />}>
                <Route index element={<ClientForIndex  />} />
                <Route path='/web-page' element={<ClientForWebPage />}/>
              </Route>
          {/* Auth */}
          <Route path='/auth' element={<Layout />}>
            <Route path='contact'  element={<Contact />} />
            <Route index path='login'  element={<LoginReg />} />
            <Route path='send-password-reset-email'  element={<SendPasswordResetEmail />} />
            <Route path='reset'  element={<ResetPasword />} />
          </Route >
          {/* Admin panel */}
           <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<HomePage />} />
            </Route>
          {/* Client page */}
          
        </Routes>
      </BrowserRouter>
   

   </>
  )
}

export default App;