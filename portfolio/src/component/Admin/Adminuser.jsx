
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authverify";
import Sidebar from "./Sidebar";
import { BeatLoader } from "react-spinners";
const Adminuser = () => {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
  const { token } = useContext(AuthContext);
  const URL = `https://api.durlavparajuli.com.np/api/admin/users`;
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const users = await response.json();
      setData(users);
      if (response.ok) 
        console.log("Data Fetched Successfully");
    } catch (error) {
      console.error("Error Loading Data");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId, userName) => {
    const confirmDelete = window.confirm(`Delete the user for ${userName}`);
    if (confirmDelete) {
      try {
        const response = await fetch(`${URL}/${userId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          fetchUsers();
          console.log("User Deleted Successfully");
        } else {
          console.error("Error Deleting User");
        }
      } catch (error) {
        console.error("Error Deleting User", error);
      }
    }
  };

  const handleEdit = (userId) => {
		navigate(`/admin/user/${userId}/edit`);
	};

  return (
    <>
    {loading ? (
  <div className="flex min-h-screen bg-black">
    {/* Sidebar */}
    <div className="lg:w-1/4 text-white bg-black">
      <Sidebar />
    </div>

    {/* Loader */}
    <div className="flex-grow flex items-center justify-center ">
      <BeatLoader
        color={"purple"}
        size={30}
      />
    </div>
  </div>
) : (
  <div className="flex flex-col lg:flex-row min-h-screen bg-black">
    {/* Sidebar */}
    <div className="lg:w-1/4 text-white bg-black">
      <Sidebar />
    </div>

    {/* Main Content */}
    <div className="flex-grow p-4">
      <div className="mt-24">
        {/* Table container with fixed height and vertical scrolling */}
        <div className="overflow-y-auto h-[600px] bg-white mt-36 w-[1000px] ml-12">
          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">Username</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Phone</th>
                <th className="p-2 border border-gray-300">Admin Role</th>
                <th className="p-2 border border-gray-300">Verified</th>
                <th className="p-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, i) => (
                  <tr key={i} className="even:bg-gray-100">
                    <td className="p-2 border border-gray-300">
                      {item.username}
                    </td>
                    <td className="p-2 border border-gray-300">{item.email}</td>
                    <td className="p-2 border border-gray-300">{item.phone}</td>
                    <td className="p-2 border border-gray-300">
                      {item.isAdmin ? "Yes" : "No"}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {item.isVerified ? "Yes" : "No"}
                    </td>
                    <td className="p-2 border border-gray-300">
                      <button
                        onClick={() => handleEdit(item._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id, item.username)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-3 text-center">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)}

            </>
  );
};

export default Adminuser;


