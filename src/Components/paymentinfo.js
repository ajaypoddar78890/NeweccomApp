import React from "react";

const paymentinfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col space-y-4">
      <label
        htmlFor="cardNumber"
        className="text-sm font-semibold text-gray-600"
      >
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.CardNumber}
        onChange={(event) =>
          setFormData({ ...formData, CardNumber: event.target.value })
        }
      />

      <label
        htmlFor="expiryDate"
        className="text-sm font-semibold text-gray-600"
      >
        Expiry Date
      </label>
      <input
        type="text"
        id="expiryDate"
        name="expiryDate"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.expiryDate}
        onChange={(event) =>
          setFormData({ ...formData, expiryDate: event.target.value })
        }
      />

      <label htmlFor="cvv" className="text-sm font-semibold text-gray-600">
        CVV
      </label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.Cvv}
        onChange={(event) =>
          setFormData({ ...formData, Cvv: event.target.value })
        }
      />

      <label
        htmlFor="cardHolder"
        className="text-sm font-semibold text-gray-600"
      >
        Cardholder Name
      </label>
      <input
        type="text"
        id="cardHolder"
        name="cardHolder"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={formData.CardHolder}
        onChange={(event) =>
          setFormData({ ...formData, CardHolder: event.target.value })
        }
      />
    </div>
  );
};

export default paymentinfo;
