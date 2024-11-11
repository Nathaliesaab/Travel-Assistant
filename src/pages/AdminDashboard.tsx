import { useState } from "react";
import Logo from '../assets/Logo.png'
import { oList_events } from '../data/events';
import { FiX, FiEdit2, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ setLoggedIn }: { setLoggedIn: (loggedIn: boolean) => void }) => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("events");
    const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleExpandEvent = (id: number) => {
        setExpandedEventId(expandedEventId === id ? null : id);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem("user");
        navigate("/admin");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed z-20 inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-blue-600 text-white p-6 transition-transform duration-300 ease-in-out flex flex-col justify-between`}>
                <div className="flex flex-col gap-y-4">
                    <div className="mx-auto">
                        <img src={Logo} width={100} className="invert-[1]" />
                    </div>

                    <ul>
                        <li
                            className={`p-3 rounded-md cursor-pointer ${activeTab === "events" ? "bg-blue-700" : "bg-blue-500"}`}
                            onClick={() => setActiveTab("events")}
                        >
                            Events
                        </li>
                    </ul>
                    <ul>
                        <li
                            className={`p-3 rounded-md cursor-pointer ${activeTab === "locations" ? "bg-blue-700" : "bg-blue-500"}`}
                            onClick={() => setActiveTab("events")}
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
            <div className={`flex-1 p-8 ${isSidebarOpen ? "ml-64" : "ml-0"} transition-all duration-300`}>
                {activeTab === "events" && (
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold">Manage Events</h2>
                        {oList_events.map((event) => (
                            <div key={event.id} className="p-4 mb-4 bg-white rounded-lg shadow hover:cursor-pointer">
                                <div className="flex items-center justify-between"
                                    onClick={(click) => {
                                        click.preventDefault();
                                        toggleExpandEvent(event.id);
                                    }}
                                >
                                    <h3 className="text-xl font-bold">{event.name}</h3>
                                    <button
                                        onClick={() => toggleExpandEvent(event.id)}
                                        className="text-blue-500 underline"
                                    >
                                        {expandedEventId === event.id ? <FiX size={24} /> : <FiEdit2 size={20} />}
                                    </button>
                                </div>

                                {/* Expandable Form */}
                                {expandedEventId === event.id && (
                                    <div className="pt-4 mt-4 border-t">
                                        <label className="block mb-2 text-gray-600">Event Name</label>
                                        <input
                                            type="text"
                                            defaultValue={event.name}
                                            className="w-full p-2 mb-4 border rounded-md"
                                        />
                                        <label className="block mb-2 text-gray-600">Event Date</label>
                                        <input
                                            type="date"
                                            defaultValue={event.date}
                                            className="w-full p-2 mb-4 border rounded-md"
                                        />
                                        <label className="block mb-2 text-gray-600">Location</label>
                                        <input
                                            type="text"
                                            defaultValue={event.location}
                                            className="w-full p-2 mb-4 border rounded-md"
                                        />
                                        <label className="block mb-2 text-gray-600">Priority</label>
                                        <select
                                            defaultValue={event.priority}
                                            className="w-full p-2 mb-4 border rounded-md"
                                            onChange={(e) => console.log(e.target.value)}
                                        >
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        <button className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600">
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default AdminDashboard;