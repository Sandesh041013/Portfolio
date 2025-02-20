
// // import { useContext, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AuthContext } from "../Authverify";
// // import Sidebar from "./Sidebar";
// // import { BeatLoader } from "react-spinners";
// // const Admincontact = () => {
// //     const [loading, setLoading] = useState(true);
    
// //       useEffect(() => {
// //         setTimeout(() => {
// //           setLoading(false);
// //         }, 1000);
// //       }, []);
// //   const { token } = useContext(AuthContext);
// //   const URL = `https://api.durlavparajuli.com.np/api/admin/contacts`;

// //   const [data, setData] = useState([]);

// //   const fetchContacts = async () => {
// //     try {
// //       const response = await fetch(URL, {
// //         method: "GET",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       const contacts = await response.json();
// //       setData(contacts);
// //       if (response.ok) 
// //         console.log("Data Fetched Successfully");
// //     } catch (error) {
// //       console.error("Error Loading Data");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchContacts();
// //   }, []);

// //   const handleDelete = async (userId, userName) => {
// //     const confirmDelete = window.confirm(`Delete the user for ${userName}`);
// //     if (confirmDelete) {
// //       try {
// //         const response = await fetch(`${URL}/${userId}`, {
// //           method: "DELETE",
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         if (response.ok) {
// //           fetchContacts();
// //           console.log("User Deleted Successfully");
// //         } else {
// //           console.error("Error Deleting User");
// //         }
// //       } catch (error) {
// //         console.error("Error Deleting User", error);
// //       }
// //     }
// //   };

// //   return (
// //     <>
// //     {loading ? (
// //   <div className="flex min-h-screen bg-black">
// //     {/* Sidebar */}
// //     <div className="lg:w-1/4 text-white bg-black">
// //       <Sidebar />
// //     </div>

// //     {/* Loader */}
// //     <div className="flex-grow flex items-center justify-center ">
// //       <BeatLoader
// //         color={"purple"}
// //         size={30}
// //       />
// //     </div>
// //   </div>
// // ) : (
// //   <div className="flex flex-col lg:flex-row min-h-screen bg-black">
// //     {/* Sidebar */}
// //     <div className="lg:w-1/4 text-white bg-black">
// //       <Sidebar />
// //     </div>
// //     <div className="user-container">
// // 			<table className="border-collapse border border-gray-300 w-full" >
// // 				<thead>
// // 					<tr>
// // 						<th>Username</th>
// // 						<th>Email</th>
// // 						<th>Phone</th>
// // 						<th>Actions</th>
// // 					</tr>
// // 				</thead>
// // 				<tbody>
// // 					{data.length > 0 ? (
// // 						data.map((item, i) => (
// // 							<tr key={i}>
// // 								<td>{data[i].name}</td>
// // 								<td>{data[i].email}</td>
// // 								<td>{data[i].message}</td>
// // 								<td>
// // 									<button
// // 										className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
// // 										onClick={() => handleDelete(data[i]._id, data[i].name)}
// // 									>
// // 										Delete
// // 									</button>
// // 								</td>
// // 							</tr>
// // 						))
// // 					) : (
// // 						<tr>
// // 							<td colSpan="5">
// // 								<h1>No contacts found.</h1>
// // 							</td>
// // 						</tr>
// // 					)}
// // 				</tbody>
// // 			</table>
// // 		</div>
   
// //   </div>
// // )}

// //             </>
// //   );
// // };

// // export default Admincontact;
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Authverify";
// import Sidebar from "./Sidebar";
// import { BeatLoader } from "react-spinners";

// const Admincontact = () => {
//   const [loading, setLoading] = useState(true);
//   const { token } = useContext(AuthContext);
//   const URL = "https://api.durlavparajuli.com.np/api/admin/contacts";
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const response = await fetch(URL, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const contacts = await response.json();
//       if (response.ok) {
//         setData(contacts);
//         console.log("Data Fetched Successfully");
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error Loading Data:", error);
//     }
//   };

//   useEffect(() => {
//     if (token) fetchContacts();
//   }, [token]);

//   const handleDelete = async (userId, userName) => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete ${userName}?`);
//     if (confirmDelete) {
//       try {
//         const response = await fetch(`${URL}/${userId}`, {
//           method: "DELETE",
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (response.ok) {
//           setData((prevData) => prevData.filter((contact) => contact._id !== userId));
//           console.log("User Deleted Successfully");
//         } else {
//           console.error("Error Deleting User");
//         }
//       } catch (error) {
//         console.error("Error Deleting User:", error);
//       }
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-black">
//       {/* Sidebar */}
//       <div className="lg:w-1/4 bg-black text-white">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col flex-grow p-6 text-white">
//         <h1 className="text-2xl font-semibold mb-6 text-purple-400">Admin Contacts</h1>

//         {loading ? (
//           <div className="flex justify-center items-center min-h-[50vh]">
//             <BeatLoader color="purple" size={20} />
//           </div>
//         ) : (
//           <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-800 text-gray-300">
//                   <th className="p-3 border-b border-gray-700">Username</th>
//                   <th className="p-3 border-b border-gray-700">Email</th>
//                   <th className="p-3 border-b border-gray-700">Message</th>
//                   <th className="p-3 border-b border-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.length > 0 ? (
//                   data.map((item, i) => (
//                     <tr key={i} className="hover:bg-gray-800 transition">
//                       <td className="p-3 border-b border-gray-700">{item.name}</td>
//                       <td className="p-3 border-b border-gray-700">{item.email}</td>
//                       <td className="p-3 border-b border-gray-700">{item.message}</td>
//                       <td className="p-3 border-b border-gray-700">
//                         <button
//                           className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
//                           onClick={() => handleDelete(item._id, item.name)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center p-6 text-gray-400">
//                       No contacts found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Admincontact;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authverify";
import Sidebar from "./Sidebar";
import { BeatLoader } from "react-spinners";

const Admincontact = () => {
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const URL = "https://api.durlavparajuli.com.np/api/admin/contacts";
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const contacts = await response.json();
      if (response.ok) {
        setData(contacts);
        console.log("Data Fetched Successfully");
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error Loading Data:", error);
    }
  };

  useEffect(() => {
    if (token) fetchContacts();
  }, [token]);

  const handleDelete = async (userId, userName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${userName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`${URL}/${userId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          setData((prevData) => prevData.filter((contact) => contact._id !== userId));
          console.log("User Deleted Successfully");
        } else {
          console.error("Error Deleting User"); 
        }
      } catch (error) {
        console.error("Error Deleting User:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-black text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-6 lg:pl-6 text-white">
        <h1 className="text-2xl font-semibold mb-6 text-purple-400">Admin Contacts</h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <BeatLoader color="purple" size={20} />
          </div>
        ) : (
          <div className="bg-white text-black shadow-lg overflow-hidden w-[1000px] h-[600px] mt-20 ml-24">
            {/* Scrollable Table Container */}
            <div className="h-[600px]  overflow-y-auto w-[1000px]">
              <table className="w-full text-left border-collapse">
                <thead className="  ">
                  <tr className="bg-gray-200">
                    <th className="p-3 border border-gray-300">Username</th>
                    <th className="p-3 border border-gray-300">Email</th>
                    <th className="p-3 border border-gray-300">Message</th>
                    <th className="p-3 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, i) => (
                      <tr key={i} className="">
                        <td className="p-3 border border-gray-300">{item.name}</td>
                        <td className="p-3 border border-gray-300">{item.email}</td>
                        <td className="p-3 border border-gray-300">{item.message}</td>
                        <td className="p-3 border border-gray-300">
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
                            onClick={() => handleDelete(item._id, item.name)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-6 text-gray-400">
                        No contacts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admincontact;

