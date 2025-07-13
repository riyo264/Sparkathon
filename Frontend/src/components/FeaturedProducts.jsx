import React from 'react';
import { Link } from 'react-router-dom'; // ✅ ADD THIS
import product1 from '../data/Product1.json';
import product2 from '../data/Product2.json';

const allProducts = [...product1, ...product2];
const limitedProducts = allProducts.slice(0, 1000);

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

      {/* ✅ Horizontal scroll wrapper */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {limitedProducts.map((product, index) => (
          <div
            key={product.asin || index}
            className="min-w-[230px] max-w-[230px] flex-shrink-0 border rounded-lg shadow hover:shadow-lg p-4 bg-white"
          >
            <img
              src={product.imgUrl}
              alt={product.title}
              loading="lazy"
              className="w-full h-40 object-contain mb-2 bg-white"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
            <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
            <p className="text-xs text-yellow-600 mt-1">
              ⭐ {product.stars || 'No rating'}
            </p>
            <p className="text-blue-600 font-bold text-sm mt-1">₹{product.price}</p>
            {product.listPrice > 0 && (
              <p className="text-gray-400 line-through text-xs">
                ₹{product.listPrice}
              </p>
            )}

            {/* ✅ Internal Link to product details page */}
            <Link
              to={`/product/${index}`}
              className="inline-block mt-2 text-center bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
