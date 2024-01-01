import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  const validate = () => {
    let result = true;

    if (email === "" || email === null) {
      result = false;
    }

    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch(
          `http://localhost:5000/users?email=${email}`
        );
        const userData = await response.json();

        if (userData.length > 0) {
          console.log("Login successful:", userData[0]);
          // You may perform additional actions upon successful login
          sessionStorage.setItem("email", email);

          navigate("/");
        } else {
          console.log("Invalid credentials");
          // Handle invalid credentials, show error message, etc.
        }
      } catch (error) {
        console.log("Error during login:", error);
        // Handle other errors, network issues, etc.
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 gap-11"
          >
            Login
          </button>
          <button
            onClick={handleNavigate}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
