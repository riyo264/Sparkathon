import product1 from '../data/product1.json';
import Header from '../components/Header';
import {useParams} from 'react-router-dom';
import React, {useState, useEffect, useMemo} from 'react';

const PRODUCTS_PER_PAGE = 20; // Adjust as needed   

const InsideDepartments = () => {
    const {departmentId, departmentName} = useParams();
    const decodedDepartmentName = decodeURIComponent(departmentName || "Unknown Department");
  const matchingProducts = product1.filter(
    (item) => String(item.category_id) === String(departmentId)
  );

  console.log('Selected Department ID:', departmentId);
  console.log('Matching Products:', matchingProducts);

  return (
    <div>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Products in {decodedDepartmentName}
      </h1>

      {matchingProducts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {matchingProducts.map((product) => (
            <li
              key={product.asin}
              className="border rounded p-4 hover:shadow transition flex flex-col"
            >
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
              <p className="text-yellow-500 text-sm mt-1">
                ⭐ {product.stars} ({product.reviews} reviews)
              </p>
              {product.isBestSeller && (
                <span className="inline-block bg-yellow-400 text-xs text-black font-bold px-2 py-1 rounded mt-2">
                  Best Seller
                </span>
              )}
              <a
                href={product.productURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600"
              >
                View on Amazon
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for this department.</p>
      )}
    </div>
    </div>
  );
};

export default InsideDepartments;
