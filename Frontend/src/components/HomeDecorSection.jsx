import React from 'react'
import { Star } from 'lucide-react'

const HomeDecorSection = () => {
  const homeProducts = [
    {
      id: 1,
      name: 'Modern Table Lamp',
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.5,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Throw Pillow Set',
      price: '$22.99',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Wall Art Canvas',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      badge: 'Trending'
    },
    // {
    //   id: 4,
    //   name: 'Storage Basket',
    //   price: '$18.99',
    //   image: 'https://images.pexels.com/photos/https://www.pexels.com/photo/elegant-natural-woven-basket-in-sunlit-room-31390655/4207893/pexels-photo-4207893.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   rating: 4.4
    // },
    {
      id: 5,
      name: 'Decorative Vase',
      price: '$26.99',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Area Rug',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      badge: 'New'
    }
  ]

  return (
    <section className="py-10 bg-walmart-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-walmart-blue to-walmart-yellow bg-clip-text text-transparent">
            🔥 Popular in Home Decor
          </h2>
          <button className="text-walmart-blue hover:text-walmart-blue-dark font-medium text-sm">
            View All
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {homeProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex-shrink-0 w-56 bg-white rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs text-black font-semibold px-2 py-0.5 rounded">
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-xl"
                onError={(e) => (e.target.src = '/fallback.jpg')}
              />

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-sm text-yellow-500">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  {product.rating}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-walmart-blue">
                    {product.price}
                  </span>
                  <button className="btn-primary px-3 py-1 text-sm rounded-full transform hover:scale-105 transition">
                    Add to Cart
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

export default HomeDecorSection
