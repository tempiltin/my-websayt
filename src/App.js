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
// import ClientLogin from "./Components/ClientLogin";

const App = () => {
  // const [user , setUser] = useState(null);
  // useEffect(()=>{
  //   firebase.auth().onAuthStateChanged(user =>{
  //     setUser(user)
  //   },[])
  // })

  document.addEventListener("mousemove", mouseMove)
  let pointer = document.querySelectorAll(".pointer")
  function mouseMove(e) {
    let x = e.clientX
    let y = e.clientY
    pointer.forEach(function (cursor) {
      cursor.style.left = x + "px"
      cursor.style.top = y + "px"
    })
  }

 
  return (
   <>
      <BrowserRouter>
        <Routes >
        <Route path={'/'} element={<Client />}>
                <Route index element={<ClientForIndex  />} />
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
      <div className="trail">
	      <div className="pointer pointer1"></div>
      </div>

   </>
  )
}

export default App;