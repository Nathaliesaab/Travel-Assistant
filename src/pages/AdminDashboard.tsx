import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Get_All_Locations, Update_Location_Priority } from "../api/location_apis"
import { FiLogOut, FiEdit2, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ setLoggedIn }: { setLoggedIn: (loggedIn: boolean) => void }) => {

    const itemsPerPage = 100
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState("locations");
    const [buttonLoading, setButtonLoading] = useState<string | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const [expandedLocationId, setExpandedLocationId] = useState<number | null>(null);

    useEffect(() => {
        if (activeTab === "locations") {
            loadLocations();
        }
    }, [activeTab]);

    const loadLocations = async () => {
        setIsLoading(true);
        const [data, error] = await Get_All_Locations();
        if (data) {
            setLocations(data);
        } else {
            console.error("Error fetching locations:", error);
        }

        setIsLoading(false);
    };

    const handleUpdatePriority = async (id: string, newPriority: boolean) => {
        setButtonLoading(id);
        setNotification(null);

        const [updatedLocation, error] = await Update_Location_Priority({
            id,
            prioritized: newPriority,
        });

        setButtonLoading(null);

        if (updatedLocation) {
            setLocations((prevLocations) =>
                prevLocations.map((loc) => (loc.id === id ? updatedLocation : loc))
            );
            setNotification("Priority updated successfully!");

            setTimeout(() => setNotification(null), 3000);
        } else {
            console.error("Error updating priority:", error);
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < Math.ceil(locations.length / itemsPerPage)) {
            setPage(newPage);
        }
    };

    const toggleExpandLocation = (id: number) => {
        setExpandedLocationId(expandedLocationId === id ? null : id);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem("user");
        navigate("/admin");
    };

    const paginatedLocations = locations.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className={`fixed z-20 inset-y-0 left-0 transform translate-x-0 w-64 bg-blue-600 text-white p-6 transition-transform duration-300 ease-in-out flex flex-col justify-between`}>
                <div className="flex flex-col gap-y-4">
                    <div className="mx-auto">
                        <img src={Logo} width={100} className="invert-[1]" />
                    </div>
                    <ul>
                        <li
                            className={`p-3 rounded-md cursor-pointer ${activeTab === "locations" ? "bg-blue-700" : "bg-blue-500"}`}
                            onClick={() => setActiveTab("locations")}
                        >
                            Locations
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <ul>
                        <li
                            className={`p-3 rounded-md cursor-pointer flex flex-row items-center gap-x-2 ${activeTab === "L" ? "bg-blue-700" : "bg-blue-500"}`}
                            onClick={() => handleLogout()}
                        >
                            <FiLogOut size={22} />  Logout
                        </li>
                    </ul>
                </div>

            </div>

            {/* Main Content */}
            <div className={`flex-1 p-8 ml-64`}>
                {activeTab === "locations" && (
                    <div className="h-full">
                        <h2 className="mb-6 text-2xl font-semibold">Manage Locations</h2>
                        {isLoading ? (
                            <div className="flex items-center justify-center w-full h-full mt-4">
                                <div className="w-24 h-24 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                        ) : (
                            <div>
                                {paginatedLocations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="p-4 mb-4 bg-white rounded-lg shadow hover:cursor-pointer"
                                    >
                                        <div
                                            className="flex items-center justify-between"
                                            onClick={() => toggleExpandLocation(location.id)}
                                        >
                                            <h3 className="text-xl font-bold">{location.name}</h3>
                                            <button className="text-blue-500 underline">
                                                {expandedLocationId === location.id ? <FiX size={24} /> : <FiEdit2 size={20} />}
                                            </button>
                                        </div>

                                        {/* Expandable Form */}
                                        {expandedLocationId === location.id && (
                                            <div className="pt-4 mt-4 border-t">
                                                <label className="block mb-2 text-gray-600">Location Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue={location.name}
                                                    className="w-full p-2 mb-4 border rounded-md"
                                                    readOnly
                                                />
                                                <label className="block mb-2 text-gray-600">Address</label>
                                                <input
                                                    type="text"
                                                    defaultValue={location.address}
                                                    className="w-full p-2 mb-4 border rounded-md"
                                                    readOnly
                                                />
                                                <label className="block mb-2 text-gray-600">Priority</label>
                                                <select
                                                    defaultValue={location.prioritized ? "High" : "Low"}
                                                    className="w-full p-2 mb-4 border rounded-md"
                                                >
                                                    <option value="High">High</option>
                                                    <option value="Low">Low</option>
                                                </select>
                                                <button
                                                    className={`px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600 ${buttonLoading === location.id ? "opacity-50 cursor-not-allowed" : ""
                                                        }`}
                                                    onClick={() =>
                                                        handleUpdatePriority(location.id, !location.prioritized)
                                                    }
                                                    disabled={buttonLoading === location.id}
                                                >
                                                    {buttonLoading === location.id ? (
                                                        <span className="flex items-center justify-center">
                                                            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                                                        </span>
                                                    ) : (
                                                        "Save Changes"
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Pagination Controls */}
                                <div className="flex items-center justify-between mt-6">
                                    <button
                                        className={`px-4 py-2 text-white bg-blue-500 rounded-md ${page === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                                            }`}
                                        onClick={() => handlePageChange(page - 1)}
                                        disabled={page === 0}
                                    >
                                        Previous
                                    </button>

                                    <span className="text-gray-700">
                                        Page {page + 1} of {Math.ceil(locations.length / itemsPerPage)}
                                    </span>

                                    <button
                                        className={`px-4 py-2 text-white bg-blue-500 rounded-md ${page === Math.ceil(locations.length / itemsPerPage) - 1
                                            ? "opacity-50 cursor-not-allowed"
                                            : "hover:bg-blue-600"
                                            }`}
                                        onClick={() => handlePageChange(page + 1)}
                                        disabled={page === Math.ceil(locations.length / itemsPerPage) - 1}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {notification && (
                    <div className="fixed px-4 py-2 text-white bg-green-500 rounded-md shadow-lg top-4 right-4">
                        {notification}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
