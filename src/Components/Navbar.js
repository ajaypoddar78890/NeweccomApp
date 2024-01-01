import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  // const cartCount = useSelector((state) => state.cart.count);

  const handleNavigate = () => {
    navigate("/login");
  };

  const [isListVisible, setListVisible] = useState(false);
  const handleIconClick = () => {
    setListVisible(!isListVisible);
  };
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
          {/* <Link to="/">Home</Link> */}
          <Link to="/product">Products</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>

        {/* User and Cart Links */}
        <div
          className="flex items-center space-x-4 gap-5 cursor-pointer"
          onClick={handleIconClick}
        >
          <FiUser size={50} style={{ color: "white" }} />

          {isListVisible && (
            <ul className="bg-white text-black  absolute top-20 z-10 m-2 text-xl px-10 rounded-lg">
              <div className="flex flex-col gap-2">
                <button
                  className="rounded-md border font-medium"
                  onClick={handleNavigate}
                >
                  logout
                </button>
                <button className="rounded-md border font-medium">
                  account
                </button>
                <button className="rounded-md border font-medium">
                  {" "}
                  orders
                </button>
              </div>
              {/* Add more list it ems as needed */}
            </ul>
          )}

          <Link to="/cart">
            <FiShoppingCart size={50} style={{ color: "white" }} />
            {/* <span className="text-black text-2xl">{cartCount}</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
