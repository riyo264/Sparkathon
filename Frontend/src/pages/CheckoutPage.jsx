// Enhanced CheckoutPage.jsx with Elegant Black & Gold Theme
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');
  const [address, setAddress] = useState({ name: '', street: '', city: '', zip: '' });
  const [existingAddress, setExistingAddress] = useState('');
  const [saveAddress, setSaveAddress] = useState(false);
  const [orderNote, setOrderNote] = useState('');

  const handlePlaceOrder = () => {
    navigate('/order-success');
  };

  const subtotal = 1522.22;
  const shipping = 0;
  const total = subtotal + shipping;
  const formatINR = (value) => `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100 font-[Inter]">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Address Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">🏠 Shipping Address</h2>

            <select
              value={existingAddress}
              onChange={(e) => setExistingAddress(e.target.value)}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
              <option value="">Select existing address</option>
              <option value="123 Main St">HOSTEL G NIT JAMSHEDPUR</option>
              <option value="456 Lane, Delhi">456 Lane, Delhi</option>
            </select>

            <input type="text" placeholder="Full Name" value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="Street Address" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="City" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600" />
            <input type="text" placeholder="ZIP Code" value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600" />
            <label className="flex items-center mt-3 text-sm text-gray-700">
              <input type="checkbox" checked={saveAddress} onChange={() => setSaveAddress(!saveAddress)} className="mr-2" />
              Save this address for future orders
            </label>
          </div>

          {/* Payment Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">💳 Payment Method</h2>
            <div className="space-y-3">
              <label className={`flex items-center p-3 rounded-md cursor-pointer border ${paymentMethod === 'card' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="mr-2" />
                <span>💳 Credit / Debit Card</span>
              </label>
              <label className={`flex items-center p-3 rounded-md cursor-pointer border ${paymentMethod === 'upi' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'}`}>
                <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="mr-2" />
                <span>🏦 UPI Payment</span>
              </label>
              <label className={`flex items-center p-3 rounded-md cursor-pointer border ${paymentMethod === 'cod' ? 'border-gray-500 bg-gray-100' : 'border-gray-200'}`}>
                <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="mr-2" />
                <span>💵 Cash on Delivery</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-4 space-y-3">
                <input type="text" placeholder="Name on Card" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
                <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
                <div className="flex gap-3">
                  <input type="text" placeholder="Expiry (MM/YY)" className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
                  <input type="text" placeholder="CVV" className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="mt-4">
                <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="Enter your UPI ID" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📦 Order Summary</h2>
          <p className="text-sm text-gray-600 mb-2">Subtotal: {formatINR(subtotal)}</p>
          <p className="text-sm text-gray-600 mb-4">Shipping: {formatINR(shipping)}</p>
          <textarea
            rows="3"
            placeholder="📝 Order Notes (e.g., leave at door)"
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
          />

          <p className="text-lg font-bold mb-4">Total: {formatINR(total)}</p>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            🛒 Place Order
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
