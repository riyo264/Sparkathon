import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const categories = [
    { name: 'Grocery', icon: '🛒', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Home', icon: '🏠', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Tech', icon: '💻', image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=150', path: '/tech' },
    { name: 'Fashion', icon: '👗', image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Beauty', icon: '💄', image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Sports', icon: '⚽', image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Toys', icon: '🧸', image: 'https://images.pexels.com/photos/1082306/pexels-photo-1082306.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Auto', icon: '🚗', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Garden', icon: '🌱', image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Books', icon: '📚', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  const handleCategoryClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 text-center cursor-pointer group transition-transform duration-300 hover:scale-105"
              onClick={() => handleCategoryClick(category.path)}
            >
              <div className="w-20 h-20 mx-auto mb-2 rounded-full border-4 border-gray-100 group-hover:border-walmart-blue shadow-sm transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-walmart-blue">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
