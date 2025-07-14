import React from 'react';
import DotGrid from './DotGrid';
import ChromaGrid from './chromagrid';
import blackFridayImage from '../assets/blackfriday.jpg';
import fashion from '../assets/fashion.jpg';
import beauty from '../assets/beauty.jpg';

const Hero = () => {
  return (
    <section className="relative w-full py-3 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 r">

          {/* BLACK FRIDAY HERO SECTION */}
          <div className="relative lg:col-span-2 h-[600px] w-[50em] m overflow-hidden">

            {/* BACKGROUND LAYER: DotGrid */}
            <div className="absolute inset-0 z-1 rounded-lg overflow-hidden">
              <DotGrid
                dotSize={5}
                gap={10}
                baseColor="#222"
                activeColor="#FF13F0"
                proximity={100}
                speedTrigger={120}
                shockRadius={300}
                shockStrength={3}
                maxSpeed={4500}
                resistance={60}
                returnDuration={0.5}
              />
            </div>

            {/* BACKGROUND IMAGE LAYER */}
            <img
              src={blackFridayImage}
              alt="Black Friday"
              className="absolute rounded-lg inset-0 w-full h-full object-fill z-0 opacity-90"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/10 z-10" />

            {/* CONTENT LAYER */}
            <div className="relative z-20 w-full h-full rounded-lg  flex flex-col items-center justify-center text-white text-center px-8">
              <span className="text-sm uppercase text-white font-semibold tracking-wider mb-2">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
                Black Friday Deals
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Save up to 50% on electronics, home goods, and more
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                  Shop Now
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS USING CHROMAGRID */}
          <div className="w-10px  flex justify-center  items-start">
            <ChromaGrid
              items={[
                {
                  image: beauty,
                  title: "Up to 40% Off",
                  subtitle: "Beauty & Personal Care",
                  handle: "@shopbeauty",
                  borderColor: "#3B82F6",
                  gradient: "linear-gradient(145deg,#3B82F6,#000)",
                  url: "#"
                },
                {
                  image: fashion,
                  title: "New Arrivals",
                  subtitle: "Fashion & Accessories",
                  handle: "@shopfashion",
                  borderColor: "#9333EA",
                  gradient: "linear-gradient(165deg,#9333EA,#000)",
                  url: "#"
                }
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;