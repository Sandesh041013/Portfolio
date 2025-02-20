
import { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Authverify";
import Sidebar from "./Sidebar";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminservices = () => {
  const { token } = useContext(AuthContext);
  const URL = `https://api.durlavparajuli.com.np/api/admin/services`;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch services");

      const services = await response.json();
      setData(services);
      setLoading(false);

      if (services.length === 0) toast.error("No services available");
    } catch (error) {
      toast.error("Error Loading Data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (userId, serviceName) => {
    const confirmDelete = window.confirm(`Delete the service for ${serviceName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`${URL}/${userId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          fetchServices();
          toast.success("Service Deleted Successfully");
        } else {
          toast.error("Error Deleting Service");
        }
      } catch (error) {
        toast.error("Error deleting service");
        console.error(error);
      }
    }
  };

  const handleEdit = (serviceId) => {
    navigate(`/admin/service/${serviceId}/edit`);
  };
  const gotoAddservice=()=>{
navigate("/admin/services/add")
  }

  return loading ? (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-black text-white">
        <Sidebar />
      </div>

      {/* Loader */}
      <div className="flex-grow flex items-center justify-center">
        <BeatLoader color={"purple"} size={30} />
      </div>
    </div>
  ) : (
    <div className="flex bg-black min-h-screen ">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-black">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Admin Services</h1>
          
          
          
        </div>

        {/* Services Table */}
        <div className="overflow-y-auto  h-[600px] bg-white mt-28 w-[1000px] ml-28">
            <div className="w-full flex justify-center items-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition h-8 w-36" onClick={gotoAddservice}>
              Add Service
            </button>
            </div>

          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">SN</th>
                <th className="p-2 border border-gray-300">Service</th>
                <th className="p-2 border border-gray-300">Description</th>
                <th className="p-2 border border-gray-300">Provider</th>
                <th className="p-2 border border-gray-300">Price</th>
                <th className="p-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, i) => (
                  <tr key={i} className="even:bg-gray-100">
                    <td className="p-2 border border-gray-300">{i + 1}</td>
                    <td className="p-2 border border-gray-300">{item.service}</td>
                    <td className="p-2 border border-gray-300">{item.description}</td>
                    <td className="p-2 border border-gray-300">{item.provider}</td>
                    <td className="p-2 border border-gray-300">{item.price}</td>
                    <td className="p-2 border border-gray-300 flex gap-2">  
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
                        onClick={() => handleEdit(item._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                        onClick={() => handleDelete(item._id, item.service)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-lg">
                    No services found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adminservices;
