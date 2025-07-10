// src/pages/Home.jsx
import React, { useState } from 'react';
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
import LiveKitModal from '../components/LivekitModal';

const Home = () => {

  const [showVA, setshowVA] = useState(false);

  const handleAgentClick = () => {
    setshowVA(true)
  }

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
        {/* <button className="voice-agent" onClick={handleAgentClick}>
          <i class="fa-solid fa-microphone"></i>
        </button> */}
      </main>
      {/* {showVA && <LiveKitModal setshowVA={setshowVA}/>} */}
      <Footer />
    </div>
  );
};

export default Home;
