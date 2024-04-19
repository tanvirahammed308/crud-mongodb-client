/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../firebase/firebase.config";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

  // eslint-disable-next-line no-unused-vars
  const [users,setUsers]=useState(null);
  const [loader,setLoader]=useState(true);
  const newUser=(email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const existingUser=(email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password)
  };

  const logOut=()=>{
    setLoader(true);
    return signOut(auth)
  }

  const userInfo={
    users,loader,newUser,existingUser,logOut

  }
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider