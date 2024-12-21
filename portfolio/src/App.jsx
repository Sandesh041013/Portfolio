import React, { useEffect, useState } from 'react'
// import { BrowserRouter, Routes,Route}from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Login from './component/Login'
import Servicess from './component/Servicess'
import Resister from './pages/Resister'
import {  BeatLoader } from "react-spinners"
import Footer from './Navigation/Footer';
import Forgetpass from './pages/Forgetpass';

const App = () => {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])

  return (
    
    <div className=''>
      <Navbar/>
      {Loading ? 
      <div className='h-screen flex items-center justify-center '>
        <BeatLoader className=' bg-black h-screen w-screen flex justify-center items-center'
        color={"purple"}
        size={50}
      /></div> :
      <>
      
        <Routes>
          <Route>
          {/* <Route path="/" element={<Navbar />}> */}
          <Route index  element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/servicess" element={<Servicess />}></Route> */}
          <Route path="/resister" element={<Resister />}></Route>
          <Route path="/forgetpass" element={<Forgetpass/>}></Route>
          </Route>
        </Routes>
        <Footer/>
        </>
        }
        
    </div>
  )
}

export default App
