// src/pages/Home.jsx
import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategoryCarousel from '../components/CategoryCarousel';
import FlashDeals from '../components/FlashDeals';
import SeasonalSection from '../components/SeasonalSection';
import HomeDecorSection from '../components/HomeDecorSection';
import VideoSection from '../components/VideoSection';
import TrendingSection from '../components/TrendingSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import FeaturedProducts from '../components/FeaturedProducts'; // ✅ Add this

const Home = () => {
  const [showVA, setShowVA] = useState(false);

  const handleAgentClick = () => {
    setShowVA(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <CategoryCarousel />
        <FlashDeals />
        <section className="px-4 py-10">
          <FeaturedProducts />
        </section>
        <SeasonalSection />
        <HomeDecorSection />
        <VideoSection />
        <TrendingSection />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
