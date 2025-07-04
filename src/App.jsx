// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TechPage from './pages/TechPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import other pages later

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechPage />} />
      </Routes>
    </Router>
  );
};

export default App;
