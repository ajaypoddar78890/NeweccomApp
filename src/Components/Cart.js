// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./state/cartReducer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b mb-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-fill rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total and Checkout */}
          <div className="mt-8 flex justify-between items-center">
            <div className="text-lg font-semibold">
              Total: ${calculateTotal()}
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
