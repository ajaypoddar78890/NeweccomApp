import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto p-4">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold leading-tight mb-2">
              Discover the Latest Trends
            </h2>
            <p className="text-lg mb-4">
              Explore our new collection and find the perfect items for your
              style.
            </p>
            <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              //   src="https://placekitten.com/800/500" // Replace with your actual banner image URL
              src="resourse/salebanner.jpg"
              alt="Banner"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
