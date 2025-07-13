// src/pages/ProductDetails.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import product1 from '../data/Product1.json';
import product2 from '../data/Product2.json';
import { FaStar, FaBarcode, FaTag, FaCartPlus, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const allProducts = [...product1, ...product2];

const sampleReviews = [
  {
    user: 'Amit S.',
    avatar: 'https://i.pravatar.cc/40?img=3',
    rating: 5,
    comment: 'Absolutely amazing product! Quality is top-notch.',
  },
  {
    user: 'Sneha R.',
    avatar: 'https://i.pravatar.cc/40?img=5',
    rating: 4,
    comment: 'Good value for the price. Satisfied overall.',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts[parseInt(id)];

  if (!product) return <div className="p-6 text-red-500">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 hover:underline text-sm mb-4"
      >
        <FaArrowLeft /> Back to Products
      </button>

      {/* Product Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6"
      >
        {/* Product Image */}
        <div className="flex flex-col items-center">
          <img
            src={product.imgUrl}
            alt={product.title}
            className="w-full max-w-md h-96 object-contain rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>

        {/* Sticky Product Info */}
        <div className="md:sticky md:top-20 flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>

          <div className="flex items-center text-yellow-500 text-lg">
            <FaStar className="mr-1" />
            {product.stars || "N/A"} / 5
            <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
          </div>

          <div className="mt-1 text-2xl text-green-600 font-semibold">₹{product.price}</div>
          {product.listPrice > 0 && (
            <div className="text-sm text-gray-500 line-through">M.R.P: ₹{product.listPrice}</div>
          )}

          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1">
              <FaTag /> Category: {product.category_id}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
              <FaBarcode /> ASIN: {product.asin}
            </span>
          </div>

          {product.isBestSeller && (
            <span className="inline-block bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
              BEST SELLER
            </span>
          )}

          <a
            href={product.productURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            <FaCartPlus /> Buy on Walmart
          </a>

          <p className="text-sm text-gray-600 mt-3">
            <strong>Bought in Last Month:</strong> {product.boughtInLastMonth}
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 text-base leading-relaxed bg-gray-50 p-4 rounded-lg shadow-sm">
          Perfect Checked Bag for Longer Trips: Get through a crowded airport easily with this
          ergonomic, expandable, soft-sided checked luggage with ample storage and all the
          organizational aids that you need. 360-Degree Multi-Directional Spinner Wheels: Navigate
          small spaces with ease. Made from durable, scuff-resistant polyester fabric.
        </p>
      </motion.div>

      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
        <div className="space-y-4">
          {sampleReviews.map((review, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{review.user}</p>
                <p className="text-yellow-500 text-sm">⭐ {review.rating} / 5</p>
                <p className="text-gray-700 text-sm mt-1">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
