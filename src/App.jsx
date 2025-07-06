import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TechPage from './pages/TechPage';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/departments/:category" element={<Departments />} />
        <Route path="/services/:type" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
