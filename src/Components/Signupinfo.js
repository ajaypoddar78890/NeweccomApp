import React from "react";

const Signupinfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-sm font-semibold text-gray-600">
        Email
      </label>
      <input
        type="email" // Correct the spelling here
        id="email"
        name="email"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      <label htmlFor="password" className="text-sm font-semibold text-gray-600">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      <label
        htmlFor="confirmPassword"
        className="text-sm font-semibold text-gray-600"
      >
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
};

export default Signupinfo;
