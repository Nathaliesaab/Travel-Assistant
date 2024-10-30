import { useState } from "react";

const Admin = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
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
                <div className="mb-6">
                    <label className="block mb-2 text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full py-2 text-[#fff] transition bg-blue-500 rounded-md bg-primary"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Admin;