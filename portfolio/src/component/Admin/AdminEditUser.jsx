
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../Authverify";


const API = "https://api.durlavparajuli.com.np"
const AdminEditUser = () => {
  const { token} = useContext(AuthContext);
  console.log(API, token)
    const {id} = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: false,
  });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  // Fetch user data
//   const fetchUser = async () => {
//     const URL = `${API}/api/admin/user/${params.id}`;
//     try {
//       const response = await fetch(URL, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const res_data = await response.json();
//         setUser({
//           username: res_data.username,
//           email: res_data.email,
//           phone: res_data.phone,
//           isAdmin: res_data.isAdmin,
//         });
//         setLoading(false);
//       } else {
//         throw new Error("Failed to fetch user data");
//       }
//     } catch (error) {
//       toast.error("Error loading user data");
//       console.error(error);
//     }
//   };
const fetchUser = async () => {
    const URL = `${API}/api/admin/user/${id}`;
    console.log("Fetching from:", URL);
    console.log("Using token:", token);
  
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      // Log the full response before parsing
      const text = await response.text();
      console.log("Raw API Response:", text);
  
      // Try parsing JSON
      const res_data = JSON.parse(text);
  
      if (response.ok) {
        console.log("User Data:", res_data);
        setUser({
          username: res_data.username,
          email: res_data.email,
          phone: res_data.phone,
          isAdmin: res_data.isAdmin,
        });
        setLoading(false);
      } else {
        console.error("API Error:", res_data);
        toast.error(res_data.message || "Failed to fetch user data");
      }
    } catch (error) {
      
      toast.error("Error loading user data");
    }
  };
  

  useEffect(() => {
    fetchUser();
  }, []);

  // Handle form input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: name === "isAdmin" ? value === "true" : value, // Convert isAdmin to boolean
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = `${API}/api/admin/users/${params.id}`;
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("User updated successfully");
        navigate("/admin/users");
      } else {
        const res_data = await response.json();
        toast.error(res_data.extraDetails || res_data.message || "Error updating user");
      }
    } catch (error) {
      toast.error("Error updating user");
      
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="flex min-h-screen bg-black">
      {/* Loader */}
      <div className="flex-grow flex items-center justify-center">
        <BeatLoader color={"purple"} size={30} />
      </div>
    </div>
  ) : (
    <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h1 className="text-2xl font-semibold mb-6">Edit User{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleInput}
            required
            className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleInput}
            required
            className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            value={user.phone}
            onChange={handleInput}
            required
            className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Admin Role */}
        <div className="flex flex-col">
          <label htmlFor="isAdmin" className="mb-1 text-sm">
            Admin Role
          </label>
          <select
            name="isAdmin"
            id="isAdmin"
            value={user.isAdmin}
            onChange={handleInput}
            className="p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default AdminEditUser;
