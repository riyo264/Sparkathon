import React from 'react'
import { Star, Clock, ShoppingCart } from 'lucide-react'
import Countdown from 'react-countdown'

const FlashDeals = () => {
  const flashDeals = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: '$29.99',
      originalPrice: '$59.99',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.5,
      discount: '50% off'
    },
    {
      id: 2,
      name: 'Smart Watch Fitness Tracker',
      price: '$49.99',
      originalPrice: '$99.99',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.3,
      discount: '50% off'
    },
    {
      id: 3,
      name: 'Portable Phone Charger',
      price: '$19.99',
      originalPrice: '$39.99',
      image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      discount: '50% off'
    },
    {
      id: 4,
      name: 'LED Desk Lamp',
      price: '$24.99',
      originalPrice: '$49.99',
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.4,
      discount: '50% off'
    },
    {
      id: 5,
      name: 'Coffee Maker',
      price: '$39.99',
      originalPrice: '$79.99',
      image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6,
      discount: '50% off'
    },
    {
      id: 6,
      name: 'Yoga Mat',
      price: '$14.99',
      originalPrice: '$29.99',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      discount: '50% off'
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">⚡ Flash Deals</h2>
            <div className="flex items-center mt-1 text-red-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm font-semibold">
                <Countdown
                  date={Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000} // 2h 45m
                  renderer={({ hours, minutes, seconds }) => (
                    <span>Ends in {hours}h {minutes}m {seconds}s</span>
                  )}
                />
              </span>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
            View All →
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {deal.discount}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{deal.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  {deal.rating}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-blue-600 font-bold text-lg">{deal.price}</span>
                    <span className="text-gray-400 text-sm line-through ml-2">{deal.originalPrice}</span>
                  </div>
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlashDeals
