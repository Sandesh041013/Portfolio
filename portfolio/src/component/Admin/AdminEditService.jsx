
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../Authverify";
const API = "https://api.durlavparajuli.com.np"
const AdminEditService = () => {
  const { token} = useContext(AuthContext);
  console.log(API, token)
    const {id} = useParams();
  const [service, setService] = useState({
    description: "",
    service: "",
    provider: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  

  const fetchServices = async () => {
    try {
        const URL = `${API}/api/admin/service/${params.id}`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const res_data = await response.json();
        console.log(response);
        console.log(res_data);
        if (response.ok) {
            if (serviceData)
                setService({
                    description: res_data.description,
                    service: res_data.service,
                    provider: res_data.provider,
                    price: res_data.price,
                });
            setServiceData(false);
            setLoading(false);
        }
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    fetchServices();
}, []);

  // Handle form input changes
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setService({ ...service, [name]: value });
};

  // Handle form submission
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = `${API}/api/admin/services/${params.id}`;
    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(service),
        });

        const res_data = await response.json();

        if (response.ok) {
            // console.log("res from server", res_data);
            toast.success("Service Updated successfully");
            navigate("/admin/services");
        } else {
            setLoading(true);
            toast.error(res_data.extraDetails || res_data.message);
        }
    } catch (error) {
        console.log("service add error: ", error);
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
	<h1 className="text-2xl font-semibold mb-4 text-center">Edit Service</h1>
	<form onSubmit={handleSubmit} className="space-y-4">
		<div>
			<label htmlFor="description" className="block text-sm font-medium">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				placeholder="Service description"
				required
				autoComplete="off"
				value={service.description}
				onChange={handleInput}
				className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:ring focus:ring-purple-500"
			/>
		</div>

		<div>
			<label htmlFor="service" className="block text-sm font-medium">Service Name</label>
			<input
				type="text"
				name="service"
				id="service"
				placeholder="Service name"
				required
				autoComplete="off"
				value={service.service}
				onChange={handleInput}
				className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:ring focus:ring-purple-500"
			/>
		</div>

		<div>
			<label htmlFor="provider" className="block text-sm font-medium">Provider</label>
			<input
				type="text"
				name="provider"
				id="provider"
				placeholder="Your provider"
				required
				autoComplete="off"
				value={service.provider}
				onChange={handleInput}
				className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:ring focus:ring-purple-500"
			/>
		</div>

		<div>
			<label htmlFor="price" className="block text-sm font-medium">Price</label>
			<input
				type="text"
				name="price"
				id="price"
				placeholder="Service price"
				required
				autoComplete="off"
				value={service.price}
				onChange={handleInput}
				className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:ring focus:ring-purple-500"
			/>
		</div>

		<button
			type="submit"
			className="w-full bg-purple-500 hover:bg-purple-600 transition text-white py-2 rounded font-medium"
		>
			Update Service
		</button>
	</form>
</div>

  );
};

export default AdminEditService;



