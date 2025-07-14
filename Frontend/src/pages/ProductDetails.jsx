// src/pages/ProductDetails.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products_with_reviews.json";
import { FaStar, FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[parseInt(id)];
  const [sentiment, setSentiment] = useState(null);

  if (!product) return <div className="p-6 text-red-500">Product not found</div>;

  useEffect(() => {
    fetch("http://localhost:5000/api/sentiment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reviews: product.reviews.map((r) => r.comment),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSentiment(data.sentiment);
      });
  }, [product]);

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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-white via-blue-50 to-white rounded-xl shadow-xl p-6"
      >

        {/* Product Image with Gradient Border */}
        <div className="flex flex-col items-center">
          <div className="p-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-96 object-contain rounded-lg bg-white p-4"
            />
          </div>
        </div>

        {/* Sticky Product Info */}
        <div className="md:sticky md:top-20 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Dynamic Stars */}
          <div className="flex items-center gap-1 text-yellow-400 text-lg">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(product.rating) ? "" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-500 text-sm ml-2">
              ({product.reviews.length} reviews)
            </span>
          </div>

          <div className="mt-1 text-2xl text-green-600 font-semibold">
            ₹{product.price}
          </div>

          {/* Animated Buy Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <FaCartPlus /> Buy Now
          </motion.a>

          {/* Sentiment */}
          <p className={`text-sm font-semibold ${
            sentiment === "Positive"
              ? "text-green-600"
              : sentiment === "Negative"
              ? "text-red-500"
              : "text-gray-500"
          }`}>
            Sentiment: {sentiment || "Analyzing..."}{" "}
            {sentiment === "Positive"
              ? "😊"
              : sentiment === "Negative"
              ? "😐"
              : "🤔"}
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
        <p className="text-gray-700 text-base leading-relaxed bg-white/70 backdrop-blur-lg p-4 rounded-lg shadow-md">
          This product is designed for optimal quality and customer satisfaction.
          Enjoy premium features, reliable performance, and superior build quality.
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
          {product.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow hover:shadow-xl hover:scale-[1.01] transition-all"
            >
              <div className="relative">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 3}`}
                  alt={review.user}
                  className="w-10 h-10 rounded-full border-2 border-gradient-to-r from-purple-500 to-pink-500"
                />
                {index === 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded">
                    Top
                  </span>
                )}
              </div>
              <div>
                <p className="font-medium">{review.user}</p>
                <p className="text-yellow-500 text-sm">⭐ {review.rating} / 5</p>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{review.comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
