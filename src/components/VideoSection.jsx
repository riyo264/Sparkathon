import React from 'react'
import { Play } from 'lucide-react'

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: 'Summer Fashion Haul',
      thumbnail: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '5:24'
    },
    {
      id: 2,
      title: 'Home Decor Tips',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '8:15'
    },
    {
      id: 3,
      title: 'Tech Reviews',
      thumbnail: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '12:30'
    },
    {
      id: 4,
      title: 'Cooking Essentials',
      thumbnail: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '6:45'
    },
    {
      id: 5,
      title: 'Fitness Gear Guide',
      thumbnail: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300',
      duration: '9:18'
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured in Videos</h2>
          <button className="text-walmart-blue hover:text-walmart-blue-dark font-medium">
            View All
          </button>
        </div>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection