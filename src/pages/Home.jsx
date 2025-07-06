// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryCarousel from '../components/CategoryCarousel';
import FlashDeals from '../components/FlashDeals';
import SeasonalSection from '../components/SeasonalSection';
import HomeDecorSection from '../components/HomeDecorSection';
import VideoSection from '../components/VideoSection';
import TrendingSection from '../components/TrendingSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <Hero />
        <CategoryCarousel />
        <FlashDeals />
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
