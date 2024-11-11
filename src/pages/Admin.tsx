import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing eye icons

const Admin = ({ setLoggedIn }: { setLoggedIn: (loggedIn: boolean) => void }) => {

    const navigate = useNavigate();

    const [error, setError] = useState<string>("")
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);


    const handleLogin = () => {
        if (username === "admin" && password === "admin@123#") {
            const user = {
                id: 1,
                username: username,
                password: password,
                name: "Super Admin",
            };

            localStorage.setItem("user", JSON.stringify(user));
            setLoggedIn(true);
            navigate("/admin-dashboard");
        } else {
            setError("Wrong credentials. Please try again.");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter username"
                    />
                </div>
                <div className="relative mb-6">
                    <label className="block mb-2 text-gray-700">Password</label>
                    <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute text-gray-600 cursor-pointer right-3 top-10"
                    >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                <button
                    onClick={handleLogin}
                    className="w-full py-2 text-[#fff] transition bg-blue-500 rounded-md bg-blue-600"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Admin;