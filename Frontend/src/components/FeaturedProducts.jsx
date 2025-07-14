import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products_with_reviews.json";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-wide">
        Featured Products
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x">
        {products.map((product, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={product.id}
            className="snap-center"
          >
            <Link to={`/product/${index}`} className="relative">
              {/* Optional Best Seller Badge */}
              {product.rating >= 4.8 && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full shadow-lg z-10">
                  ★ Top Rated
                </span>
              )}

              <div className="min-w-[230px] max-w-[230px] min-h-[320px] max-h-[320px] flex-shrink-0 bg-white border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center justify-between">
                
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/230x160?text=No+Image";
                  }}
                  className="w-full h-40 object-contain rounded-lg shadow-sm bg-gray-50 mb-3"
                />

                <div className="w-full text-left space-y-1">
                  <h3 className="font-semibold text-md text-gray-800 line-clamp-2 hover:text-blue-600 transition">
                    {product.name}
                  </h3>

                  <div className="flex items-center text-yellow-500 text-sm">
                    <FaStar className="mr-1" />
                    {product.rating || "N/A"}
                  </div>

                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 font-bold text-lg">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
