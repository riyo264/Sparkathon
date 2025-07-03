import React from 'react'

const Hero = () => {
  return (
    <section className="bg-walmart-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Hero Banner */}
          <div className="lg:col-span-2 bg-gradient-to-r from-walmart-blue to-walmart-blue-dark rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Black Friday Deals</h2>
              <p className="text-xl mb-6">Save up to 50% on electronics, home goods, and more</p>
              <div className="space-x-4">
                <button className="btn-secondary">Shop Now</button>
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-walmart-blue transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-walmart-yellow rounded-full opacity-20"></div>
            <div className="absolute -right-20 -bottom-10 w-60 h-60 bg-walmart-yellow rounded-full opacity-10"></div>
          </div>

          {/* Side Promo Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md card-hover">
              <h3 className="text-xl font-bold text-walmart-blue mb-2">Up to 40% Off</h3>
              <p className="text-gray-600 mb-4">Beauty & Personal Care</p>
              <img 
                src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Beauty products" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="btn-primary w-full">Shop Beauty</button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md card-hover">
              <h3 className="text-xl font-bold text-walmart-blue mb-2">New Arrivals</h3>
              <p className="text-gray-600 mb-4">Fashion & Accessories</p>
              <img 
                src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Fashion items" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="btn-primary w-full">Shop Fashion</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero