import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-walmart-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Walmart</h3>
            <p className="text-sm mb-4">
              Save money. Live better. Your trusted partner for quality products at great prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-walmart-yellow cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-walmart-yellow cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-walmart-yellow cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-walmart-yellow cursor-pointer" />
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-walmart-yellow">Help Center</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Contact Us</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Returns</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Shipping Info</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Track Order</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Walmart</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-walmart-yellow">Our Story</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Careers</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Press Center</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Sustainability</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Corporate</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-walmart-yellow">Grocery Pickup</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Pharmacy</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Photo Center</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Money Services</a></li>
              <li><a href="#" className="hover:text-walmart-yellow">Auto Care</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-walmart-blue-dark mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 Walmart Inc. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer