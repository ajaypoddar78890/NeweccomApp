import React, { useState } from "react";
import Signupinfo from "./Signupinfo";
import Addressinfo from "./Addressinfo";
import Paymentinfo from "./paymentinfo";
import { useNavigate } from "react-router-dom";

const YourFormComponent = () => {
  const nevigate = useNavigate();
  const [page, setpage] = useState(0);

  const FormTitle = ["personal detail ", "addressInfo", "paymentInfo"];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    StreetAddress: "",
    zipcode: "",
    City: "",
    Country: "",
    CardNumber: 0,
    expiryDate: "",
    Cvv: 0,
    CardHolder: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Signupinfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Addressinfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Paymentinfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-md bg-blue-400 p-8 rounded shadow-md h-3/4">
        <div className="mb-4 text-center font-bold text-2xl">
          <h1>{FormTitle[page]}</h1>
        </div>
        <div className="mb-6">{PageDisplay()}</div>
        <div className="flex justify-between">
          <div className="w-1/2"></div>
          <div className="flex space-x-4">
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded"
              disabled={page === 0}
              onClick={() => {
                setpage(page - 1);
              }}
            >
              Prev
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              //   disabled={page === FormTitle.length - 1}
              onClick={() => {
                if (page === FormTitle.length - 1) {
                  //setting item into local storage

                  localStorage.setItem("formData", JSON.stringify(formData));

                  nevigate("/");
                  alert("Form Submmited !");
                } else {
                  setpage(page + 1);
                }
              }}
            >
              {page === FormTitle.length - 1 ? "submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFormComponent;
