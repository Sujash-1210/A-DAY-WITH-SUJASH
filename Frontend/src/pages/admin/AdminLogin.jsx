import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Themed responsive UI
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token); // Store token
        toast.success("Login successful!");
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-color-bg-parchment p-4">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg border border-color-light-gray">
        <h2 className="text-center text-2xl font-bold mb-6 text-color-primary-dark">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-color-primary-dark">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 border border-color-light-gray rounded-md outline-none focus:ring-2 focus:ring-color-secondary-blue"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium text-color-primary-dark">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-3 border border-color-light-gray rounded-md outline-none focus:ring-2 focus:ring-color-secondary-blue"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-secondary-gold text-white text-lg font-semibold rounded-md hover:bg-color-accent-burnt transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
