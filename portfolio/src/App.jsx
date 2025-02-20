
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Login from './component/Login';
import Servicess from './component/Servicess';
import Resister from './pages/Resister';
import { BeatLoader } from "react-spinners";
import Footer from './Navigation/Footer';
import Forgetpass from './pages/Forgetpass';
import SingleService from './component/SingleService';
import Dashboard from './component/Dashboard';
import { Logout } from './component/Logout';
import { Authverify } from './component/Authverify';
import Adminuser from './component/Admin/Adminuser';
import Sidebar from './component/Admin/Sidebar';
import Admincontact from './component/Admin/Admincontact';
import Adminservices from './component/Admin/Adminservices';
import AdminEditUser from './component/Admin/AdminEditUser';
import AdminEditService from './component/Admin/AdminEditService';
import AdminAddService from './component/Admin/AdminAddService';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <BeatLoader
            className="bg-black h-screen w-screen flex justify-center items-center"
            color={"purple"}
            size={30}
          />
        </div>
      ) : (
        <BrowserRouter>
        <Authverify>
          {/* Wrapping Navbar, Routes, and Footer in a single BrowserRouter */}
          <Navbar />
          {/* <Sidebar/> */}
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/servicess" element={<Servicess />} />
              <Route path="/servicess/:id" element={<SingleService />} />
              <Route path="/resister" element={<Resister />} />
              <Route path="/forgetpass" element={<Forgetpass />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/adminuser" element={<Adminuser />} />
              <Route path="/admincontact" element={<Admincontact />} />
              <Route path="/adminservices" element={<Adminservices />} />
              <Route path="/admin/user/:id/edit" element={<AdminEditUser />} />
              <Route path="/admin/service/:id/edit"element={<AdminEditService />}/>
              <Route path="admin/services/add" element={<AdminAddService />}/>
            </Routes>

          </Authverify>
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
