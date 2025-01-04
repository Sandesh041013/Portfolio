import React, { useState,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons
const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedin, setisloggedin] = useState(false)
  const checklogin = () => {
    if (localStorage.getItem('token')) {
      setisloggedin(true);
    }
  }
  useEffect(() => {
    checklogin();
  }, [])
  const navItems = [
    {
      id: 1,
      title: "Home",
      to: "/",
      icon: <FaHome />
    },
    {
      id: 2,
      title: "About",
      to: "/about",
      icon: <FaInfoCircle />
    },
    {
      id: 3,
      title: "Skills",
      to: "/services",
      icon: <FaGears />
    },
    {
      id: 4,
      title: "Contact Me",
      to: "/contact",
      icon: <MdOutlineContactPhone />
    },
    
    {
      id: 6,
      title: "Services",
      to: "/Servicess",
      icon: <RiLoginBoxFill />
    },
    
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='h-24 bg-black text-slate-200 flex items-center justify-between px-6 fixed w-screen z-50 '>
        {/* Logo */}
        <div className=' justify-start  text-3xl font-bold font-sans h-24 flex items-center ml-8'>
          <img src="logo.jpg" alt="Logo" className="h-14 w-18 " />
        </div>

        {/* Hamburger Icon for Mobile - aligned to the right */}
        <div className="lg:hidden flex items-center text-5xl absolute right-6 text-gray-500" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links - Centered on small screens */}
        <nav className={`lg:flex ${isOpen ? 'flex' : 'hidden'} flex-col  lg:text-xl sm:text-3xl font-semibold bg-black  w-full lg:bg-transparent lg:static absolute top-24 left-0 right-0`}>
          <ul
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:justify-end items-center min-h-screen lg:min-h-0 w-full sm:text-gray-400 lg:mt-0 mt-32 text-xl"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => {
                    setActive(item.id);
                    setIsOpen(false)
                  }

                  }
                  className={`flex items-center gap-2 lg:mr-3 transition duration-300 hover:scale-110 ${active === item.id ? " border-b-2 border-[#9D00FF]" : "hover:text-[#9D00FF] "}`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
            {isloggedin ? (
              <li className="flex text-white mr-10">
                <Link
                  className="hover:text-indigo-600 flex items-center gap-2"
                  to="/logout"
                >
                  {" "}
                 Logout
                </Link>
              </li>
            ) : (
              <li className="flex text-white mr-10">
                <Link
                  className="hover:text-indigo-600 flex items-center gap-2"
                  to="/login"
                >
                  {" "}
                   Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className='h-24'></div>

      </div>

    </>
  );
};
// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkLogin = () => {
//     if (localStorage.getItem("token")) {
//       setIsLoggedIn(true);
//     }
//   };

//   useEffect(() => {
//     checkLogin();
//   }, []);

//   const data = [
//     {
//       title: "Home",
//       // icon: <FaHome />,
//       to: "/",
//       id: 0,
//     },
//     {
//       title: "About",
//       // icon: <FaCircleInfo />,
//       to: "/about",
//       id: 1,
//     },
//     {
//       title: "Skills",
//       // icon: <FaGears />,
//       to: "/skills",
//       id: 2,
//     },
//     {
//       title: "Services",
//       // icon: <AiTwotonePushpin />,
//       to: "/services",
//       id: 3,
//     },
//     {
//       title: "Contact",
//       // icon: <MdContactPhone />,
//       to: "/contact",
//       id: 4,
//     },
//   ];
//   const [activeIndex, setActiveIndex] = useState(0);

//   function handleClick(index) {
//     setActiveIndex(index);
//   }

//   return (
//     <>
//       <nav className=" font-poppins grid items-center  w-screen h-16 bg-black border-b-2 border-slate-900 fixed z-50 ">
//         <div className="absolute lg:ml-14 flex justify-start ">
//           <img src="Sgc.jpg" alt="" className="h-[3.9rem] w-28" />
//         </div>
//         <div>
//           <ul className="flex justify-end ">
//             {data.map((item, index) => {
//               return (
//                 <li key={index} className="flex text-white mr-10">
//                   <Link
//                     to={item.to}
//                     className={`hover:text-indigo-600 flex items-center gap-2 ${
//                       activeIndex === item.id
//                         ? "text-indigo-600 font-semibold"
//                         : "text-white"
//                     }`}
//                     onClick={() => handleClick(item.id)}
//                   >
//                     {item.icon}
//                     {item.title}
//                   </Link>
//                 </li>
//               );
//             })}

//             {isLoggedIn ? (
//               <li className="flex text-white mr-10">
//                 <Link
//                   className="hover:text-indigo-600 flex items-center gap-2"
//                   to="/logout"
//                 >
//                   {" "}
//                  Logout
//                 </Link>
//               </li>
//             ) : (
//               <li className="flex text-white mr-10">
//                 <Link
//                   className="hover:text-indigo-600 flex items-center gap-2"
//                   to="/login"
//                 >
//                   {" "}
//                    Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//       <div className="h-16"></div>
//     </>
//   );
// };
export default Navbar;


