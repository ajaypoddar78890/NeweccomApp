import React from "react";

const Addressinfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="street" className="text-sm font-semibold text-gray-600">
        Street Address
      </label>
      <input
        type="text"
        id="street"
        name="street"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.StreetAddress}
        onChange={(event) =>
          setFormData({ ...formData, StreetAddress: event.target.value })
        }
      />

      <label htmlFor="city" className="text-sm font-semibold text-gray-600">
        City
      </label>
      <input
        type="text"
        id="city"
        name="city"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
      />

      <label htmlFor="zip" className="text-sm font-semibold text-gray-600">
        ZIP Code
      </label>
      <input
        type="text"
        id="zip"
        name="zip"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.zipcode}
        onChange={(event) =>
          setFormData({ ...formData, zipcode: event.target.value })
        }
      />

      <label htmlFor="country" className="text-sm font-semibold text-gray-600">
        Country
      </label>
      <input
        type="text"
        id="country"
        name="country"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.Country}
        onChange={(event) =>
          setFormData({ ...formData, Country: event.target.value })
        }
      />
    </div>
  );
};

export default Addressinfo;
