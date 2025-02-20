// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const navLinks = [
//     { name: "Users", path: "/adminuser" },
//     { name: "Contact", path: "/admincontact" },
//     { name: "Services", path: "/adminservices" },
//   ];

//   return (
//     <div className="h-[600px] w-64 bg-black text-white fixed flex flex-col items-center py-6 shadow-lg ml-40 mt-40 border-2 border-white">
//       {/* Sidebar Header */}
   

//       {/* Navigation Links */}
//       <nav className="flex flex-col space-y-10">
//         {navLinks.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             className={({ isActive }) =>
//               `text-lg font-medium transition duration-300 ${
//                 isActive ? "text-purple-500 scale-105" : "hover:text-purple-500"
//               }`
//             }
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaEnvelope, FaServicestack } from "react-icons/fa";

const Sidebar = () => {
  const navLinks = [
    { name: "Users", path: "/adminuser", icon: <FaUser /> },
    { name: "Contact", path: "/admincontact", icon: <FaEnvelope /> },
    { name: "Services", path: "/adminservices", icon: <FaServicestack /> },
  ];

  return (
    <div className="h-[600px] w-64  text-white fixed flex flex-col items-center py-6 shadow-lg ml-64 mt-40 border-2 border-white">
      {/* Sidebar Header */}
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-10">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg font-medium transition duration-300 ${
                isActive ? "text-purple-500 scale-105" : "hover:text-purple-500"
              }`
            }
          >
            <span className="text-2xl">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

