// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
  Search,
  MapPin,
  User,
  ShoppingCart,
  Menu,
  ChevronDown,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const departments = [
    'Electronics & Media',
    'Home, Furniture & Appliances',
    'Clothing, Shoes & Accessories',
    'Grocery & Essentials',
    'Health & Beauty',
    'Baby, Kids & Toys',
    'Show all Departments',
  ];

  const services = [
    'Customer Support',
    'Financial Services',
    'Health & Wellness',
    'Tech & Installation',
    'Pickup & Delivery',
  ];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-yellow-400">
            Walmart
          </Link>

          <div className="hidden md:flex items-center space-x-8 flex-1 max-w-3xl mx-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Location</span>
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm cursor-pointer hover:text-yellow-400">Reorder</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
                <User className="w-4 h-4" />
                <span className="text-sm">Sign In</span>
              </div>
              <Link
                to="/cart"
                className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm">Cart</span>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-blue-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12 overflow-visible relative">
            <div className="relative">
              <div
                onClick={() => toggleDropdown('departments')}
                className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400 whitespace-nowrap"
              >
                <span className="text-sm font-medium">Departments</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {openDropdown === 'departments' && (
                <div className="absolute top-10 left-0 w-64 bg-white text-black shadow-md rounded-md py-2 z-50">
                  {departments.map((item, index) => (
                    <Link
                      key={index}
                      to={`/departments/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <div
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400 whitespace-nowrap"
              >
                <span className="text-sm font-medium">Services</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {openDropdown === 'services' && (
                <div className="absolute top-10 left-0 w-64 bg-white text-black shadow-md rounded-md py-2 z-50">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            {/* Other Links */}
            {['Get it Fast', 'New Arrivals', 'Trending', 'Black Friday', 'Cyber Monday','Shop with AI'].map((label, i) => (
              <Link
                key={i}
                to={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap"

              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
