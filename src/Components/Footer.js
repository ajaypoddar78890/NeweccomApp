import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <ul className="text-xl text-gray-300 cursor-pointer">
              <li>Phone: 78978</li>
              <li>Toll Free: 78907890</li>
              <li>Email Addr CP New Delhi 78</li>
              <li>Website: testeccom.Com</li>
            </ul>
          </div>
          <div className="sm:col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Our Info</h2>
            <ul className="text-xg text-gray-300 cursor-pointer">
              <li>Sales</li>
              <li>Blog</li>
              <li>Brands</li>
              <li>About</li>
            </ul>
          </div>
          <div className="sm:col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="text-xl text-gray-300 cursor-pointer">
              <li>Blog</li>
              <li>Career</li>
              <li>become seller</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="sm:col-span-1 md:col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Stay Connected
            </h2>
            <div className="flex gap-6 cursor-pointer">
              <BsInstagram size={40} className="text-white text-lg" />
              <FaFacebookSquare size={40} className="text-white text-lg" />
              <FaYoutube size={40} className="text-white text-lg" />
              <BsLinkedin size={40} className="text-white text-lg" />
              <TbWorld size={40} className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="border-t border-gray-400 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-gray-300 text-3 xl mb-4 sm:mb-0">testeccom</h2>
          <span className="text-gray-300 text-xl">
            All Rights Reserved &copy;2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
