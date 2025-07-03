import React, { useState } from 'react'
import { Search, MapPin, User, ShoppingCart, Menu, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-walmart-blue text-white sticky top-0 z-50 shadow-lg">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-walmart-yellow">Walmart</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 max-w-3xl mx-8">
            {/* Location */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Location</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-walmart-yellow"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
                <span className="text-sm">Reorder</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
                <User className="w-4 h-4" />
                <span className="text-sm">Sign In</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm">Cart</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-walmart-blue-dark"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-walmart-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow whitespace-nowrap">
              <span className="text-sm font-medium">Departments</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow whitespace-nowrap">
              <span className="text-sm font-medium">Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap">Get it Fast</span>
            <span className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap">New Arrivals</span>
            <span className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap">Trending</span>
            <span className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap">Black Friday</span>
            <span className="text-sm cursor-pointer hover:text-walmart-yellow whitespace-nowrap">Cyber Monday</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-walmart-blue-dark">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                placeholder="Search everything"
                className="flex-1 px-3 py-2 rounded text-gray-900 placeholder-gray-500"
              />
              <Search className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 py-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Location</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Sign In</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header