import React from 'react'
import DotGrid from './DotGrid'
import ChromaGrid from './chromagrid'
import sundress from '../assets/sundress.jpg'
import swimwear from '../assets/swimwear.jpg'
import wed from '../assets/lehenga.jpg'

const SeasonalSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-0">

          {/* Hero Section */}
          <div className="md:col-span-3 relative bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 text-white rounded-lg overflow-hidden h-[450px]">
            <div className="absolute inset-0 z-0 opacity-30">
              <DotGrid
                dotSize={6}
                gap={14}
                baseColor="#ffffff44"
                activeColor="#FF13F0"
                proximity={120}
                speedTrigger={80}
                shockRadius={300}
                shockStrength={3}
                maxSpeed={4500}
                resistance={70}
                returnDuration={3}
              />
            </div>

            <img
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Summer fashion"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            <div className="relative z-10 p-10 max-w-xl">
              <h3 className="text-sm uppercase text-pink-300 font-semibold mb-2 tracking-wider">
                Trending Now
              </h3>
              <h2 className="text-4xl font-extrabold mb-4 text-white">Women's Summer Trends</h2>
              <p className="text-lg text-gray-100 mb-6">Fresh styles for the sunny season 🌞</p>
              <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-full font-semibold transition">
                Shop Collection
              </button>
            </div>
          </div>

          {/* ChromaGrid - Horizontal Cards */}
          <div className="w-full flex justify-center items-start mt-6">
            <ChromaGrid
              items={[
                {
                  image: swimwear,
                  title: "Up to 30% Off",
                  subtitle: "Swimwear & Beachwear",
                  handle: "@swimwearstyle",
                  borderColor: "#3B82F6",
                  gradient: "linear-gradient(145deg,#3B82F6,#000)",
                  url: "#"
                },
                {
                  image: sundress,
                  title: "New Arrivals",
                  subtitle: "Sundresses & Casual Wear",
                  handle: "@sunnydresses",
                  borderColor: "#9333EA",
                  gradient: "linear-gradient(165deg,#9333EA,#000)",
                  url: "#"
                },
                {
                  image: wed,
                  title: "Wedding Wears",
                  subtitle: "Lehenga & Traditional",
                  handle: "@wedding",
                  borderColor: "#EF4444",
                  gradient: "linear-gradient(165deg,#EF4444,#000)",
                  url: "#"
                }
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default SeasonalSection
