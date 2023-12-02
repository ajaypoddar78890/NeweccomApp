import React, { useState } from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Mens shirt",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/h/i/f/m-hs-501-green-voroxy-original-imagtkehzunudja8.jpeg?q=70",
      category: "Clothing",

      price: 100,
    },
    {
      id: 2,
      name: "regular shirt",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/m/o/m-frml-st2-vebnor-original-imagqwwjegahb84t.jpeg?q=70",
      category: "Clothing",

      price: 80,
    },
    {
      id: 3,
      name: "women watch",
      image:
        "https://rukminim2.flixcart.com/image/832/832/k58hwnk0/watch/z/3/a/prv-401-bk-provogue-original-imafny4cuyf4trfy.jpeg?q=70",
      category: "Accessories",

      price: 30,
    },
    {
      id: 4,
      name: "women kurta",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/y/o/g/xl-4colour-flower-kurti-anushansa-original-imagc94fymgd9uf7-bb.jpeg?q=70",
      category: "Clothing",

      price: 56,
    },
    {
      id: 5,
      name: "iphone 15",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/q/i/-original-imagtc3kfyhgfcvr.jpeg?q=70",
      category: "Electronics",

      price: 2000,
    },
    {
      id: 6,
      name: "laptop",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/r/k/-original-imagsz5x5x3vkt8c.jpeg?q=70",
      category: "Electronics",

      price: 100,
    },
    {
      id: 7,
      name: "EarBurds",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70",
      category: "Electronics",

      price: 30,
    },
    {
      id: 8,
      name: "PUMA shoe",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/w/j/-original-imagufpp5cvkjsga.jpeg?q=70",
      category: "Shoes",

      price: 250,
    },
    {
      id: 1,
      name: "realmex7max",
      image:
        "https://rukminim2.flixcart.com/image/416/416/kpbipow0/mobile/s/g/j/x7-max-rmx3031-realme-original-imag3kpmjkcmcfvz.jpeg?q=70",
      category: "Electronics",

      price: 469,
    },
    {
      id: 1,
      name: "samasun galaxy ",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70",
      category: "Electronics",

      price: 1299,
    },

    // ... other products
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRangeFilter, setPriceRangeFilter] = useState("All");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        categoryFilter === "All" || product.category === categoryFilter
    )
    .filter((product) => {
      if (priceRangeFilter === "All") return true;
      const [minPrice, maxPrice] = priceRangeFilter.split("-");
      return (
        product.price >= parseInt(minPrice, 10) &&
        product.price <= parseInt(maxPrice, 10)
      );
    })
    .sort((a, b) => {
      if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="container mx-auto mt-8 h-full bg-gray-200 flex">
      {/* Left Section - Search, Sorting, and Filtering Options */}
      <div className="w-1/3 p-4">
        <h4 className="ml-16 text-green-900 text-4xl">Search & Filters</h4>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 p-4 w-2/3 m-10 hover:border-red-900 "
        />

        {/* Sorting Options */}
        <div className="ml-10">
          <label
            htmlFor="sort"
            className="text-2xl text-green-900  font-medium italic"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="ml-10 p-2 border"
          >
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="m-10">
          <label
            htmlFor="catogory"
            className="text-2xl text-green-900   font-medium italic"
          >
            Catogory:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="ml-10 p-2 border"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            {/* Add more categories */}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="m-10">
          <label
            htmlFor="sort"
            className="text-2xl text-green-900  font-medium italic"
          >
            Price Range
          </label>
          <select
            value={priceRangeFilter}
            onChange={(e) => setPriceRangeFilter(e.target.value)}
            className="p-2  ml-10 border"
          >
            <option value="All">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="101-200">$201 - $500</option>
            <option value="101-200">$501 - $1000</option>
            <option value="101-200">$1001 - $2000</option>
            {/* Add more price ranges */}
          </select>
        </div>
      </div>

      {/* Right Section - Product List */}
      <div className="w-3/4 p-4">
        <h4 className="text-4xl text-green-900 italic font-bold pl-5">
          Product List
        </h4>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-fill mb-4"
              />

              {/* Product Details */}
              <h3 className="text-lg font-bold mb-2 ">{product.name}</h3>
              <p className="text-gray-900 mb-2">Category: {product.category}</p>
              <p className="text-green-900 font-bold mb-2">
                Price: ${product.price}
              </p>

              <button className="rounded-lg text-black bg-yellow-400 w-44 p-2">
                buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
