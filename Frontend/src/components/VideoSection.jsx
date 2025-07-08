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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
            Featured in Videos
            <span className="absolute bottom-0 left-0 h-1 w-2/3 bg-gradient-to-r from-walmart-blue to-walmart-yellow rounded-full mt-1"></span>
          </h2>
          <button className="text-walmart-blue hover:underline hover:text-walmart-blue-dark font-medium transition">
            View All
          </button>
        </div>

        {/* Video Cards */}
        <div className="flex space-x-5 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-0.5 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
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
