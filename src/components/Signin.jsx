import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign in 
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
         <div>
  <label className="block text-gray-700 font-medium mb-1">
    Role
  </label>

  <select
    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
               bg-white text-gray-700
               focus:outline-none focus:ring-2 focus:ring-indigo-500 
               focus:border-indigo-500 transition"
  >
    <option value="">Select an option</option>
    <option value="1">Buyer</option>
    <option value="2">Contributor</option>
    <option value="3">Admin</option>
    <option value="3">Marketing</option>
    <option value="3">Sales</option>
  </select>
</div>
       
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          onClick={() => {navigate("/adminPage")}}
          >
            Sign In
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Signin;
