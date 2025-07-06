// Enhanced CartPage.jsx - More attractive bill section
import React, { useState } from 'react';
import kurti from '../assets/kurti.png';
import tshirt from '../assets/tshirt.png';
import shoe from '../assets/shoes.png';
import lakme from '../assets/lakme.png';
import watch from '../assets/watch.png';
import jeans from '../assets/jeans.png';
import perfume from '../assets/perfume.png';

const sampleCartItems = [
  { id: 1, name: 'Floral Printed Pure Cotton Pleated Anarkali Kurti', price: 1165, quantity: 2, sku: '#555951628', image: kurti },
  { id: 2, name: "Hanes Men's ComfortSoft T-Shirt", price: 299, quantity: 1, sku: '#12345678', image: tshirt },
  { id: 3, name: 'PUMA SHOES', price: 7099, quantity: 1, sku: '#98765432', image: shoe },
  { id: 4, name: 'Lakme Xtraordin-airy Mattereal Mousse Foundation, Matte Finish - 01 Classic Ivory, 25g', price: 199, quantity: 1, sku: '#98765433', image: lakme },
  { id: 5, name: 'Analog Black Dial combo Watch', price: 499, quantity: 1, sku: '#12457890', image: watch },
  { id: 6, name: 'Slim Fit Blue Denim Jeans', price: 2499, quantity: 1, sku: '#11223344', image: jeans },
  { id: 7, name: 'Engage LAMANTE Perfume Spray, 220ml', price: 999, quantity: 1, sku: '#33445566', image: perfume }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promo, setPromo] = useState('');

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const formatINR = (value) => `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">🛍️ Your Shopping Cart</h1>
          <p className="mb-4 text-gray-500">You have {cartItems.length} items in your cart</p>

          <div className="mb-6 flex gap-4">
            <button onClick={() => setCartItems(sampleCartItems)} className="text-blue-700 underline font-medium">Show Sample Cart</button>
            <button onClick={() => setCartItems([])} className="text-blue-700 underline font-medium">Show Empty Cart</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white/70 backdrop-blur p-10 rounded-xl text-center shadow-lg">
              <div className="text-5xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-4">Looks like you haven't added anything yet.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-xl shadow" />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">Item {item.sku}</p>
                      <p className="text-blue-700 font-semibold mt-1">{formatINR(item.price)}</p>
                      <div className="flex items-center mt-2 gap-2">
                        <span className="text-gray-600 text-sm">Qty:</span>
                        <button onClick={() => updateQty(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">−</button>
                        <span className="font-medium text-gray-700">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600 text-lg">✕</button>
                    <div className="font-bold text-lg mt-5">{formatINR(item.price * item.quantity)}</div>
                    <p className="text-sm text-blue-500 cursor-pointer hover:underline">Save for Later</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary - Enhanced */}
        {cartItems.length > 0 && (
          <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl p-6 h-fit sticky top-40 border border-blue-200">
            <h2 className="text-xl font-extrabold text-blue-900 mb-4 flex items-center gap-2">🧾 Order Summary</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">{formatINR(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Estimated Shipping</span><span className="font-medium text-green-600">FREE</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Tax (8%)</span><span className="font-medium">{formatINR(tax)}</span></div>
              <hr className="my-3 border-blue-200" />
              <div className="flex justify-between font-bold text-lg text-blue-800 bg-blue-100 p-3 rounded-lg">
                <span>Total</span><span>{formatINR(total)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-5">
              <input
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter promo code"
                className="w-full border border-blue-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button className="mt-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;