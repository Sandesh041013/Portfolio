import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../Authverify";

const API = "https://api.durlavparajuli.com.np";

const AdminAddService = () => {
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState({
        description: "",
        service: "",
        provider: "",
        price: "",
    });

    const navigate = useNavigate();

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
        const URL = `${API}/api/admin/add-service`;

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(service),
            });

            const res_data = await response.json();

            if (response.ok) {
                toast.success("Service Added successfully");
                setService({ description: "", service: "", provider: "", price: "" }); // Reset form
                navigate("/admin/services");
            } else {
                toast.error(res_data.extraDetails || res_data.message);
            }
        } catch (error) {
            console.error("Service add error:", error);
            toast.error("Failed to add service. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return loading ? (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <BeatLoader color={"#8b5cf6"} size={15} />
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="bg-gray-900 shadow-lg p-8 rounded-lg w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-purple-500 text-center mb-6">Add Service</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                        { label: "Description", name: "description", type: "text", placeholder: "Service description" },
                        { label: "Service Name", name: "service", type: "text", placeholder: "Service name" },
                        { label: "Provider", name: "provider", type: "text", placeholder: "Provider name" },
                        { label: "Price", name: "price", type: "number", placeholder: "Service price" },
                    ].map((input) => (
                        <div key={input.name} className="flex flex-col">
                            <label htmlFor={input.name} className="text-gray-300 mb-1">
                                {input.label}
                            </label>
                            <input
                                type={input.type}
                                name={input.name}
                                id={input.name}
                                placeholder={input.placeholder}
                                value={service[input.name]}
                                onChange={handleInput}
                                required
                                autoComplete="off"
                                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 
                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
                    >
                        {loading ? "Adding..." : "Add Service"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAddService;
