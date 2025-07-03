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
    <section className="py-8 bg-walmart-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending on Social</h2>
          <button className="text-walmart-blue hover:text-walmart-blue-dark font-medium">
            View All
          </button>
        </div>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {trendingPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-walmart-blue">{post.username}</span>
                  <span className="text-lg font-bold text-walmart-blue">{post.price}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-500">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-500">{post.comments}</span>
                    </div>
                    <Share2 className="w-4 h-4 text-gray-500" />
                  </div>
                  <button className="btn-primary text-xs px-3 py-1">
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