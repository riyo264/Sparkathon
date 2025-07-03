import React from 'react'

const SeasonalSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Women's Summer Trends</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Left Card */}
          <div className="md:col-span-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Summer Collection</h3>
              <p className="text-lg text-gray-700 mb-6">Fresh styles for the season</p>
              <button className="btn-primary">Shop Collection</button>
            </div>
            <img 
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Summer fashion" 
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-80"
            />
          </div>

          {/* Right Side Cards */}
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Swimwear</h3>
              <p className="text-gray-600 mb-4">Starting at $19.99</p>
              <img 
                src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Swimwear" 
                className="w-full h-24 object-cover rounded-lg mb-4"
              />
              <button className="btn-primary w-full">Shop Now</button>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sundresses</h3>
              <p className="text-gray-600 mb-4">Starting at $24.99</p>
              <img 
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Sundresses" 
                className="w-full h-24 object-cover rounded-lg mb-4"
              />
              <button className="btn-primary w-full">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeasonalSection