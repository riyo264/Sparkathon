import React from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'

const TrendingSection = () => {
  const trendingPosts = [
    {
      id: 1,
      username: '@fashionista_sarah',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300',
      caption: 'Perfect summer outfit from Walmart! 🌞',
      price: '$24.99',
      likes: 142,
      comments: 23
    },
    {
      id: 2,
      username: '@home_decor_mike',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
      caption: 'Transformed my living room with these pillows',
      price: '$19.99',
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      username: '@tech_reviewer',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
      caption: 'These headphones are a game changer! 🎧',
      price: '$29.99',
      likes: 256,
      comments: 45
    },
    {
      id: 4,
      username: '@fitness_jenny',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300',
      caption: 'Best yoga mat for the price! 🧘‍♀️',
      price: '$14.99',
      likes: 78,
      comments: 18
    },
    {
      id: 5,
      username: '@coffee_lover',
      image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300',
      caption: 'Morning coffee hits different with this maker ☕',
      price: '$39.99',
      likes: 134,
      comments: 28
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending on Social</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View All
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {trendingPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md transition hover:shadow-lg duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[160px]">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-blue-600">
                      {post.username}
                    </span>
                    <span className="text-md font-bold text-blue-700">
                      {post.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{post.caption}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3 text-gray-500 text-xs">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </span>
                    <Share2 className="w-4 h-4 cursor-pointer" />
                  </div>
                  <button className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full hover:bg-blue-700 transition">
                    Shop
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

export default TrendingSection
