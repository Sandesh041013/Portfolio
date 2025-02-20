import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Authverify';
export const Logout = () => {
   // const navigate = useNavigate ();
   // useEffect(() => {
   //  localStorage.removeItem('token')
   //  navigate("/login")
   // } )
   const {Logout}=useContext(AuthContext)
   Logout()
}
