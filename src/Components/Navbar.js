import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="bg-gray-400 text-black py-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* //app name */}
        <div className=" font-bold text-white">
          <Link to="/" className="text-4xl">
            TestEcoom
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className=" text-3xl gap-5  pr-10 flex items-center space-x-6 italic text-white">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/category3">Sale</Link>
          <Link to="/category4">Blog</Link>
          <Link to="/category5">About</Link>
        </div>

        {/* User and Cart Links */}
        <div className="flex items-center space-x-4 gap-5">
          <Link to="/form">
            <FiUser size={50} style={{ color: "white" }} />
          </Link>
          <Link to="/cart">
            <FiShoppingCart size={50} style={{ color: "white" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
