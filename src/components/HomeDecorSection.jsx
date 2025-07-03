import React from 'react'
import { Star } from 'lucide-react'

const HomeDecorSection = () => {
  const homeProducts = [
    {
      id: 1,
      name: 'Modern Table Lamp',
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.5
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
      rating: 4.7
    },
    {
      id: 4,
      name: 'Storage Basket',
      price: '$18.99',
      image: 'https://images.pexels.com/photos/4207893/pexels-photo-4207893.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.4
    },
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
      rating: 4.8
    }
  ]

  return (
    <section className="py-8 bg-walmart-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular in Home Decor</h2>
          <button className="text-walmart-blue hover:text-walmart-blue-dark font-medium">
            View All
          </button>
        </div>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {homeProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-56 bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-walmart-blue">{product.price}</span>
                  <button className="btn-primary text-xs px-3 py-1">
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