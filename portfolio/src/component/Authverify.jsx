import React, { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const Authverify = ({ children }) => {
  const [isloggedin, setisloggedin] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token"))
  const [user, setuser] = useState({})
  const navigate = useNavigate()
const Logout=()=>{
localStorage.removeItem("token")
settoken("")
setisloggedin(false)
setuser({})
navigate('/login')
  }
  const verify = async () => {
    if (token) {
      try {
        const URL = 'https://api.durlavparajuli.com.np/api/auth/user'
        const res = await fetch(URL, {
          headers: {
            Authorization: `Bearer${token}`
          }
        })
        const data = await res.json()
        if (res.ok) {
          setisloggedin(true)
          setuser(data)
          navigate('/dashboard')
        }
        else {
Logout();
        }
      }
      catch (error) {
        console.log(error)
        Logout()
      }
    }
    else {
Logout();
    }
  }
  console.log(isloggedin)
  console.log(user.userdata)
  
  return (
    <AuthContext.Provider value={{ token ,settoken,user,isloggedin ,Logout,setisloggedin}}>
      {children}
    </AuthContext.Provider>
  );
};


