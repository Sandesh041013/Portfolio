import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 shadow-[0_0_50px_] shadow-gray-700 relative bottom-0 sm:flex-col lg:flex-row lg:w-screen">
      {/* Logo Section */}
      <div className="flex justify-center mb-4 ">
        <img 
          src="logo.jpg" 
          alt="Your Logo" 
          className="h-14" 
        />
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center space-x-8 mb-4">
        {/* Facebook Icon with Gradient */}
        <a 
          href="https://www.facebook.com/profile.php?id=100091959338288&mibextid=LQQJ4d" 
          
          className="p-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 hover:scale-110 transition-transform"
        >
          <FaFacebookF size={30} />
        </a>

        {/* LinkedIn Icon with Gradient */}
        <a 
          href="linkedin.com/in/sandesh-acharya-7baa31295/details/skills/" 
         
          className="p-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 hover:scale-110 transition-transform"
        >
          <FaLinkedinIn size={30} />
        </a>

        {/* GitHub Icon with Gradient */}
        <a 
          href="https://github.com/Sandesh041013" 
         
          className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-400 hover:scale-110 transition-transform"
        >
          <FaGithub size={30} />
        </a>

        {/* Instagram Icon with Gradient */}
        <a 
          href="https://www.instagram.com/sandeshh232?igsh=azNla2RmNXFyZDAx&utm_source=qr" 
         
          className="p-4 rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 hover:scale-110 transition-transform"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-xl text-gray-400">
          Copyright &copy; {new Date().getFullYear()} <span className='text-white'>Sandesh Acharya</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
