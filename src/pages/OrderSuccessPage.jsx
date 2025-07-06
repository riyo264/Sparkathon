import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const OrderSuccessPage = () => {
  const { width, height } = useWindowSize();
  const orderId = `ORD${Date.now().toString().slice(-5)}`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 flex items-center justify-center px-4">
      <Confetti width={width} height={height} />

      <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center">
        <div className="text-6xl mb-4">🎊</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-3 animate-bounce">
          Order Placed Successfully!
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          Your order ID is <strong className="text-black">#{orderId}</strong>
        </p>

        <p className="text-gray-600 mb-6">Thank you for shopping with us!</p>

        <div className="bg-white rounded-lg px-4 py-3 shadow-inner text-left mb-6 text-sm md:text-base">
          <p><strong>Total:</strong> ₹15,037.92</p>
          <p><strong>Items:</strong> 7 Products</p>
          <p><strong>Estimated Delivery:</strong> 10th July</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-indigo-600 hover:to-blue-700 transition-all"
          >
            Continue Shopping
          </a>
          <a
            href="/track-order"
            className="bg-white border border-blue-500 text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-50 transition-all"
          >
            Track Order
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-700 italic">
          💙 Thank you for choosing <strong>Walmart</strong> — we value your trust.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
