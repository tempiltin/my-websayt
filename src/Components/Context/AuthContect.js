import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider ,
        //  signInWithPopup ,
         signInWithRedirect ,
         signOut,
         onAuthStateChanged
     } from "firebase/auth";

import auth from "../../db/config"
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    // console.log(user.reloadUserInfo.photoUrl);
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        // signInWithPopup(auth,provider)
        signInWithRedirect(auth,provider)
    }
    const logOut =()=>{
        navigate('/sign-in')
        signOut(auth)
    }

    useEffect(()=>{
        const unrsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            console.log( currentUser);
        })
        return()=>{
            unrsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={{googleSignIn , logOut , user}}>

            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}